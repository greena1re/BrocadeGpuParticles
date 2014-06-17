#include "ofMain.h"
#include "testApp.h"
#include "flowToolsApp.h"
#include "ofAppGlutWindow.h"
#include "ofGLProgrammableRenderer.h"
//========================================================================
int main( ){
	 
    
    //ofSetCurrentRenderer(ofGLProgrammableRenderer::TYPE);
    ofAppGlutWindow window;
    ofSetupOpenGL(&window, 1280,720, OF_WINDOW);			// <-------- setup the GL context
   // ofSetupOpenGL(1024,768, OF_WINDOW);			// <-------- setup the GL context
	// this kicks off the running of my app
	// can be OF_WINDOW or OF_FULLSCREEN
	// pass in width and height too:
	//ofRunApp( new testApp());
    
    ofRunApp(new flowToolsApp());

}
