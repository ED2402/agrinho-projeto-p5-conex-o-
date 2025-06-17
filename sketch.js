function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);

  // Campo (círculo verde à esquerda)
  fill(100, 200, 100);
  ellipse(100, 200, 80, 80);
  fill(0);
  textAlign(CENTER);
  text("Campo", 100, 200);

  // Cidade (retângulo azul à direita)
  fill(100, 100, 200);
  rect(450, 160, 100, 80);
  fill(0);
  text("Cidade", 500, 200);

  // Linha conectando os dois
  stroke(0);
  line(140, 200, 450, 200);

  // Mostrar mensagens ao passar o mouse
  if (dist(mouseX, mouseY, 100, 200) < 40) {
    text("Produção", 100, 250);
  }

  if (mouseX > 450 && mouseX < 550 && mouseY > 160 && mouseY < 240) {
    text("Consumo", 500, 250);
  }
}
