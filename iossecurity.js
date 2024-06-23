
function hook_by_export(module_name, func_name){

    var target_ptr = Module.findExportByName(module_name, func_name); 

    if(target_ptr != null){
          Interceptor.attach(target_ptr, {
            onEnter:  function(args){
				console.log("[+] Bypassing: " + func_name)
            },
              onLeave: function(retval) {

                  retval.replace(0x0); // Force return value to be 0x0
              }
          });
      }else{
        console.log("[-] Not found: " + func_name);
      }
}



setTimeout(function(){
	try{

		//var mangled_functions = ["$s16IOSSecuritySuiteAAC12denyDebuggeryyFZ","$s16IOSSecuritySuiteAAC11amITamperedySb6result_SayAA18FileIntegrityCheckOG9hitCheckstAGFZ", "$s16IOSSecuritySuiteAAC16amIRunInEmulatorSbyFZ", "$s16IOSSecuritySuiteAAC13amIJailbrokenSbyFZ", "$s16IOSSecuritySuiteAAC20amIReverseEngineeredSbyFZ", "$s16IOSSecuritySuiteAAC10amIProxiedSbyFZ", "$s16IOSSecuritySuiteAAC11amIDebuggedSbyFZ", ]
		var moduleName = "Test_IOSSECURITY"; //Change it
		var amIJailBroken = "$s16IOSSecuritySuiteAAC13amIJailbrokenSbyFZ";
		var amIReverseengineered = "$s16IOSSecuritySuiteAAC20amIReverseEngineeredSbyFZ";
		var amIProxied = "$s16IOSSecuritySuiteAAC10amIProxiedSbyFZ"
		var amIDebugged = "$s16IOSSecuritySuiteAAC11amIDebuggedSbyFZ"
		var isRunningEmulator = "$s16IOSSecuritySuiteAAC16amIRunInEmulatorSbyFZ"
		var amITampered = "$s16IOSSecuritySuiteAAC11amITamperedySb6result_SayAA18FileIntegrityCheckOG9hitCheckstAGFZ";
		var denyDebbuger = "$s16IOSSecuritySuiteAAC12denyDebuggeryyFZ";
		hook_by_export(moduleName, amIJailBroken);
		hook_by_export(moduleName, amIReverseengineered);
		hook_by_export(moduleName, amIProxied);
		hook_by_export(moduleName, amIDebugged);
		hook_by_export(moduleName, isRunningEmulator);
		hook_by_export(moduleName, amITampered);
		hook_by_export(moduleName, denyDebbuger);

	}catch(e){
		console.log(e.emssage)
	}
    
}, 1);