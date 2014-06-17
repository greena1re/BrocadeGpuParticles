#version 120
#extension GL_ARB_texture_rectangle : enable
uniform sampler2DRect forceTex;   //w1p
uniform sampler2DRect notAnything;
varying vec2 verTexPos;
void main()

{
   // vec4 fieldLine = texture2DRect(notAnything, vec2(0,0)); //gl_TexCoord[2].st).xy;
   // gl_FragColor = texture2DRect(forceTex, gl_TexCoord[0].xy);
//    gl_FragColor = fieldLine; //vec4(1.0f, 0.0f, 0.0f, 1.0f); //vec4(fieldLine.x, fieldLine.y, 0. , .5);
   gl_FragColor = vec4(0.2 , 0., 0.9, .5);
}
