import { useEffect, useState, useRef, useCallback } from "react";
import { Box, Text, Link, VStack, Select, Spinner, Divider } from "@chakra-ui/react";
import { api } from "../services/api";
import { useTranslation } from "react-i18next";

export default function RepoList({ username }) {
  const { t } = useTranslation();
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("full_name");
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  
  const lastRepoElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prev => prev + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      try {
        const res = await api.get(`/users/${username}/repos`, {
          params: { per_page: 10, page, sort }
        });
        setRepos(prev => (page === 1 ? res.data : [...prev, ...res.data]));
        setHasMore(res.data.length === 10);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, [username, page, sort]);

  return (
    <VStack align="stretch" spacing={4}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Text fontSize="xl" fontWeight="bold">{t("repos_title")}</Text>
        <Select w="200px" value={sort} onChange={(e) => { setSort(e.target.value); setPage(1); }}>
          <option value="created">Created</option>
          <option value="updated">Updated</option>
          <option value="pushed">Pushed</option>
          <option value="full_name">Full Name</option>
        </Select>
      </Box>

      {repos.map((repo, index) => (
        <Box 
          key={repo.id} 
          p={4} borderWidth="1px" borderRadius="md" 
          ref={repos.length === index + 1 ? lastRepoElementRef : null}
        >
          <Link href={repo.html_url} isExternal fontWeight="bold" color="blue.500">
            {repo.name}
          </Link>
          <Text fontSize="sm" color="gray.600">{repo.description || "No description"}</Text>
        </Box>
      ))}

      {loading && <Spinner mx="auto" mt={4} />}
    </VStack>
  );
}
