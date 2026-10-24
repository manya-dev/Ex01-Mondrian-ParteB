# Descrição do elemento generativo escolhido e porquê

A obra original de Mondrian lembra-me os antigos jogos de arcade, onde vemos todas as salas de cima, mas os espaços são fechados e sem portas. Lembrou-me logo o Pac-Man, com uma diferença crucial: aqui não há inimigos além do próprio ambiente.

Transformei esta ideia num elemento generativo onde linhas e retângulos perseguem ativamente o cursor. O objetivo é criar uma sensação de perseguição e claustrofobia, como se o próprio espaço e as suas paredes estivessem a fechar-se à volta do utilizador.

**Como funciona:**
As linhas movem-se em direção ao rato, e os retângulos são desenhados a partir das posições dessas linhas. O código calcula a distância entre cada linha e o cursor, adicionando uma pequena fração dessa distância a cada frame. O random(0.01, 0.05) é usado no fator de velocidade de cada linha. Em vez de se moverem todas ao mesmo tempo de forma robótica, cada linha move-se a um ritmo ligeiramente diferente.


