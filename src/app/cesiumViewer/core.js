// TODO: business logic must be tested before coding
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export function formatDescription(identifier, creationDate) {
  const formatedDate = formatDate(creationDate);
  return `Id ${identifier} was created on ${formatedDate}`;
}
