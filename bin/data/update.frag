#version 120
#extension GL_ARB_texture_rectangle : enable

#define int RESOLUTION = 1000;
// ping pong inputs
uniform sampler2DRect particles0;
uniform sampler2DRect particles1;
uniform sampler2DRect forceTex;   //w1p

uniform sampler2DRect notAnything;


uniform vec3 mouse;
uniform float radiusSquared;
uniform float elapsed;

uniform float width;
uniform float height;

varying vec2 fieldLine;

varying vec2 verTexPos;

void main()
{
    vec3 pos = texture2DRect(particles0, gl_TexCoord[0].st).xyz;
    vec3 vel = texture2DRect(particles1, gl_TexCoord[0].st).xyz;

   //vec3 fieldLine = texture2DRect(notAnything, gl_TexCoord[0].st).xyz;
   
    vec2 fieldLine = texture2DRect(forceTex, gl_TexCoord[2].st).xy;
    
    // mouse attraction
    vec3 direction = mouse - pos.xyz;
    float distSquared = dot(direction, direction);
    float magnitude = 500.0 * (1.0 - distSquared / radiusSquared);
    vec3 force = step(distSquared, radiusSquared) * magnitude * normalize(direction);
    
    // gravity
    force += vec3(0.0, -0.5, 0.0);
    
    
    //flowField from camera
    
    force+= (fieldLine.x*100, fieldLine.y*100, 0) ;
    
    
    
    // accelerate
    vel += elapsed * force;
    
    // bounce off the sides
    vel.x *= step(abs(pos.x), 512.0) * 2.0 - 1.0;
    vel.y *= step(abs(pos.y), 384.0) * 2.0 - 1.0;
    
    // damping
    vel *= 0.995;
    
    // move
    pos += elapsed * vel;
   
    gl_FragData[0] = vec4(pos, 1.0);
    gl_FragData[1] = vec4(vel, 0.0);
}