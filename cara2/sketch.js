nostre codi.
}

function draw() {// Draw significa dibuixar
  background(35);// Fons de color gris, perqué hi ha un numero entre 0 i 255 i el 0 es negra i el 255 es blanc.
  let s = sin(frameCount*0.05)*3;// Genera numeros la tres al menos tres
  text("sinus: "+s,20,20);
  let canvipetit = sin(frameCount*0.05)*8;
   let canvimitja= sin(frameCount*0.05)*15;
   let canvigran = cos(frameCount*0.05)*20;
  let canvimoltgran = cos(frameCount*0.05)*127;
    strokeWeight(7)
  fill(8500,0,100+canvipetit);// fill significa omplir de color ell que hi ha a de vermellos(R:red), el segon numero és el nivell verdos(G:green) i el tercer numero és elnivell de blavos(B:blue).Podem fer 255 x 255 x 255= 16.700.000 de colors diferents.He de posar el color que vulgis als ull hi ha la cara canviat els 3 numeros, buscant a google colors RGB
  ellipse(200,300,300,200+canvigran);//És la cara secera. El primer número segon número significa la posició Y (vertical) del centre de la el·lipse. El tercer número significa l'amplada de la el·lipse en pixels i el quadrat l'alçada de la el·lipse. Sempre els numeros son pixels conntants des de la cantonada  superir esquedrra, és a dir el punt 0,0 es troba diferent que a matematiques(cantonada inferior esquerra)
  fill(255);
  ellipse(250,272,50,40);
  ellipse(349,272,50,40);
  arc(301+canvigran,350+canvigran/7,115,50,0,PI);//boca

 
   fill(232,100,58 )
  ellipse(352-canvimitja,272,20,20)
   fill(255,0,0);// El color de la cara
  arc (250,260,60,35,)
    noFill(4);// no omplis de color la cella
  arc(250,260,60,35-canvimitja,PI,0);// cella esquerra
  strokeWeight(6)
  line(325,245,400,245,0,PI);//
   fill(0)
   ellipse(250-canvimitja,272-canvimitja,20,20-canvimitja);
    arc (20,260,60,35,PI,TWO_PI)

 
}
