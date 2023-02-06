export const fetchAllMembers = async () => {
  return await fetch(`/api/member`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

export const fetchCreateMember = async (member) => {
  return await fetch(`/api/member/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(member),
  });
};
