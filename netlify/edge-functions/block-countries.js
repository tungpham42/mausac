const handler = async (request, context) => {
  const country = context.geo?.country?.code || "UNKNOWN";

  const blocked = ["CN", "SG"];

  if (blocked.includes(country)) {
    return new Response("Access Denied", { status: 403 });
  }

  return context.next();
};

export default handler;
