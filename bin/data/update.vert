#version 120
#extension GL_ARB_texture_rectangle : enable
uniform sampler2DRect forceTex;
uniform vec2 screen;
uniform float width;
uniform float height;
varying vec2 verTexPos;

varying vec2 fieldLine;

void main()
{
    //this is all from the other gpu particle sketch
    
    //use the texture coordinates as an index into the position texture
    verTexPos = gl_MultiTexCoord2.xy;
//    fieldLine = texture2DRect(forceTex, verTexPos).xyz;

    //read postiion data from texture
    vec4 pixPos = texture2DRect(forceTex, verTexPos);
    
    //Maps the position from the texture (0-1)   to the screen position (0 - screenWidth/ screenheight)
    pixPos.x *= screen.x;
    pixPos.y *= screen.y;
    
    
    
    gl_TexCoord[2] = gl_MultiTexCoord2;
    
    gl_TexCoord[0] = gl_MultiTexCoord0;
	gl_Position = gl_Vertex;
}
