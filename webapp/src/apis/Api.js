export const fetchAllMembers = async () => {
  const response = await fetch(`/api/member`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return response;
};
