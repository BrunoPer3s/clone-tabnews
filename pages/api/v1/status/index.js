export default function status(request, response) {
  response.status(200).json({
    message: "1 endpoint criado",
  });
}
