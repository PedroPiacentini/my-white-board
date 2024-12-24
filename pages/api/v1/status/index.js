function status(request, response) {
  response.status(200).json({ message: "Vamo pra cima!" });
}

export default status;
