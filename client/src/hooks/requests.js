const API_URL = "http://localhost:4000";

async function httpGetPlanets() {
  return fetch(`${API_URL}/planets`).then(
    async (response) => await response.json()
  );
}

async function httpGetLaunches() {
  return fetch(`${API_URL}/launches`)
    .then((response) => response.json())
    .then((launches) =>
      launches.sort((a, b) => a.flightNumber - b.flightNumber)
    );
}

async function httpSubmitLaunch(launch) {
  try {
    return await fetch(`${API_URL}/launches`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(launch),
    });
  } catch (error) {
    return {
      ok: false,
    };
  }
}

async function httpAbortLaunch(id) {
  try {
    return await fetch(`${API_URL}/launches/${id}`, {
      method: "delete",
    });
  } catch (error) {
    console.log(error);

    return {
      ok: false,
    };
  }
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
