const baseUrl = "http://localhost:5000/i";

export const notoken = async (endponit, data) => {
  const url = `${baseUrl}/${endponit}`;
  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await resp.json();
};

export const sqlConsult = async (endponit, data = "", method = "GET") => {
  
  const url = `${baseUrl}/${endponit}`;

  if (method === "GET" || method === "DELETE") {
    const resp = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json"
        },
    });
    return await resp.json();
  }else {
    const resp = await fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await resp.json();
  }
  
};