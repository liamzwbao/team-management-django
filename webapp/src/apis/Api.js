export const fetchAllMembers = async () => {
  return await fetch(`/api/member`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

export const fetchMemberById = async (id) => {
  return await fetch(`/api/member/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
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

export const fetchUpdateMember = async (member) => {
  return await fetch(`/api/member/update/${member.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(member),
  });
};

export const fetchDeleteMember = async (id) => {
  return await fetch(`/api/member/delete/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
};
