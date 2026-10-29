# Descrição do elemento generativo escolhido e porquê

A obra original de Mondrian lembra-me os antigos jogos de arcade, onde vemos todas as salas de cima, mas os espaços são fechados e sem portas. Lembrou-me logo o Pac-Man, com uma diferença crucial: aqui não há inimigos além do próprio ambiente.

Transformei esta ideia num elemento generativo onde linhas e retângulos perseguem ativamente o cursor. O objetivo é criar uma sensação de perseguição e claustrofobia, como se o próprio espaço e as suas paredes estivessem a fechar-se à volta do utilizador.

**Como funciona:**
As linhas movem-se em direção ao rato, e os retângulos são desenhados a partir das posições dessas linhas. O código calcula a distância entre cada linha e o cursor, adicionando uma pequena fração dessa distância a cada frame. O `random(0.005, 0.01)` é usado no fator de velocidade de cada linha. Em vez de se moverem todas ao mesmo tempo de forma robótica, cada linha move-se a um ritmo ligeiramente diferente.

**As fontes**

p5js.org/reference/p5/filter
p5js.org/reference/p5/createGraphics
https://p5js.org/reference/p5/lerpColor/
p5js.org/tutorials/color-gradients/

**IA prompts**
Utilizei a IA para pesquisar como concretizar a minha ideia e para compreender como isso seria possível em código.
"explain to me in simple terms how I could create an animation in p5.js in which the lines move toward the mouse cursor. they will be anchored to the edges of the screen so the lines will only move horizontally and vertically approaching the cursor at a slow speed"
