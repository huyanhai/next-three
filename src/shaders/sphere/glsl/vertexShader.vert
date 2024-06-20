uniform float uTime;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
varying vec2 vPoint;

#include "lygia/generative/fbm.glsl";

void main() {
    vUv = uv;
    vNormal = normal;
    vPosition = position;
    
    vec3 viewDir = normalize( position );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );

    vPoint = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
    vec3 myPosition = position;

    // vec3 ct = vec3(vNormal * .2 + uTime * 0.05);

    // float n = fbm(ct) * 0.5 + 0.5;
    // myPosition *= n;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(myPosition, 1.0);

}