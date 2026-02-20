// const STRAPI_URL = "http://localhost:1337";

const STRAPI_URL = "http://103.108.220.79:1337";


export async function fetchVideo(type) {
  try {
    const res = await fetch(
      `${STRAPI_URL}/api/${type}?populate=video`,
      { next: { revalidate: 10 } }
    );

    const json = await res.json();


    const item = json.data?.[0];

    const videoPath = item?.video?.url;

    return videoPath ? STRAPI_URL + videoPath : null;
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
}

export async function getTestimonials() {
  try {
    const res = await fetch(
      `${STRAPI_URL}/api/testimonials`,
      { next: { revalidate: 10 } }
    );

    const json = await res.json();

    return json?.data ?? [];
  } catch (error) {
    console.error("Strapi error:", error);
    return [];
  }
}
