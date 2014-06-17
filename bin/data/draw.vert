#version 120
#extension GL_ARB_texture_rectangle : enable

uniform sampler2DRect particles0;
uniform sampler2DRect particles1;
uniform sampler2DRect forceTex;

void main()
{
    
    // verTexPos = gl_MultiTexCoord1.xy;
    gl_TexCoord[0] = gl_MultiTexCoord0;
    
    
    gl_FrontColor = gl_Color;

    gl_Position = gl_ModelViewProjectionMatrix * vec4(texture2DRect(particles0, gl_TexCoord[0].st).xyz, 1.0);

    //gl_Position = gl_Vertex;
}
