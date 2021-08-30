(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{394:function(t,a,s){"use strict";s.r(a);var e=s(28),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"nsudo-shared-library"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nsudo-shared-library"}},[t._v("#")]),t._v(" NSudo Shared Library")]),t._v(" "),s("h2",{attrs:{id:"nsudocreateprocess-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nsudocreateprocess-function"}},[t._v("#")]),t._v(" NSudoCreateProcess function")]),t._v(" "),s("p",[t._v("Creates a new process and its primary thread.")]),t._v(" "),s("h3",{attrs:{id:"c-c-prototype"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-c-prototype"}},[t._v("#")]),t._v(" C/C++ prototype")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("EXTERN_C HRESULT WINAPI "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSudoCreateProcess")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    _In_ NSUDO_USER_MODE_TYPE UserModeType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    _In_ NSUDO_PRIVILEGES_MODE_TYPE PrivilegesModeType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    _In_ NSUDO_MANDATORY_LABEL_TYPE MandatoryLabelType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    _In_ NSUDO_PROCESS_PRIORITY_CLASS_TYPE ProcessPriorityClassType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    _In_ NSUDO_SHOW_WINDOW_MODE_TYPE ShowWindowModeType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    _In_ DWORD WaitInterval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    _In_ BOOL CreateNewConsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    _In_ LPCWSTR CommandLine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    _In_opt_ LPCWSTR CurrentDirectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"usermodetype-parameter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usermodetype-parameter"}},[t._v("#")]),t._v(" UserModeType parameter")]),t._v(" "),s("p",[t._v("A value from the NSUDO_USER_MODE_TYPE enumerated type that identifies the user\nmode.")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("_NSUDO_USER_MODE_TYPE")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    DEFAULT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    TRUSTED_INSTALLER"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    SYSTEM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    CURRENT_USER"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    CURRENT_PROCESS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    CURRENT_PROCESS_DROP_RIGHT\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" NSUDO_USER_MODE_TYPE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("PNSUDO_USER_MODE_TYPE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"privilegesmodetype-parameter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#privilegesmodetype-parameter"}},[t._v("#")]),t._v(" PrivilegesModeType parameter")]),t._v(" "),s("p",[t._v("A value from the NSUDO_PRIVILEGES_MODE_TYPE enumerated type that identifies the\nprivileges mode.")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("_NSUDO_PRIVILEGES_MODE_TYPE")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    DEFAULT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ENABLE_ALL_PRIVILEGES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    DISABLE_ALL_PRIVILEGES\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" NSUDO_PRIVILEGES_MODE_TYPE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("PNSUDO_PRIVILEGES_MODE_TYPE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"mandatorylabeltype-parameter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mandatorylabeltype-parameter"}},[t._v("#")]),t._v(" MandatoryLabelType parameter")]),t._v(" "),s("p",[t._v("A value from the NSUDO_MANDATORY_LABEL_TYPE enumerated type that identifies the\nmandatory label.")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("_NSUDO_MANDATORY_LABEL_TYPE")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    UNTRUSTED"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    LOW"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    MEDIUM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    MEDIUM_PLUS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    HIGH"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    SYSTEM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    PROTECTED_PROCESS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" NSUDO_MANDATORY_LABEL_TYPE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("PNSUDO_MANDATORY_LABEL_TYPE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"processpriorityclasstype-parameter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#processpriorityclasstype-parameter"}},[t._v("#")]),t._v(" ProcessPriorityClassType parameter")]),t._v(" "),s("p",[t._v("A value from the NSUDO_PROCESS_PRIORITY_CLASS_TYPE enumerated type that\nidentifies the process priority class.")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("_NSUDO_PROCESS_PRIORITY_CLASS_TYPE")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    IDLE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    BELOW_NORMAL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    NORMAL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ABOVE_NORMAL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    HIGH"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    REALTIME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" NSUDO_PROCESS_PRIORITY_CLASS_TYPE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("PNSUDO_PROCESS_PRIORITY_CLASS_TYPE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"showwindowmodetype-parameter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#showwindowmodetype-parameter"}},[t._v("#")]),t._v(" ShowWindowModeType parameter")]),t._v(" "),s("p",[t._v("A value from the NSUDO_SHOW_WINDOW_MODE_TYPE enumerated type that identifies\nthe ShowWindow mode.")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("_NSUDO_SHOW_WINDOW_MODE_TYPE")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    DEFAULT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    SHOW"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    HIDE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    MAXIMIZE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    MINIMIZE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" NSUDO_SHOW_WINDOW_MODE_TYPE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("PNSUDO_SHOW_WINDOW_MODE_TYPE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"waitinterval-parameter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#waitinterval-parameter"}},[t._v("#")]),t._v(" WaitInterval parameter")]),t._v(" "),s("p",[t._v("The time-out interval for waiting the process, in milliseconds.")]),t._v(" "),s("h3",{attrs:{id:"createnewconsole-parameter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#createnewconsole-parameter"}},[t._v("#")]),t._v(" CreateNewConsole parameter")]),t._v(" "),s("p",[t._v("If this parameter is TRUE, the new process has a new console, instead of\ninheriting its parent's console (the default).")]),t._v(" "),s("h3",{attrs:{id:"commandline-parameter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commandline-parameter"}},[t._v("#")]),t._v(" CommandLine parameter")]),t._v(" "),s("p",[t._v("The command line to be executed. The maximum length of this string is 32K\ncharacters, the module name portion of CommandLine is limited to MAX_PATH\ncharacters.")]),t._v(" "),s("h3",{attrs:{id:"currentdirectory-parameter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#currentdirectory-parameter"}},[t._v("#")]),t._v(" CurrentDirectory parameter")]),t._v(" "),s("p",[t._v("The full path to the current directory for the process. The string can also\nspecify a UNC path. If this parameter is nullptr, the new process will the same\ncurrent drive and directory as the calling process. (This feature is provided\nprimarily for shells that need to start an application and specify its initial\ndrive and working directory.)")]),t._v(" "),s("h3",{attrs:{id:"return-value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#return-value"}},[t._v("#")]),t._v(" Return value")]),t._v(" "),s("p",[t._v("HRESULT. If the function succeeds, the return value is S_OK.")]),t._v(" "),s("h2",{attrs:{id:"c-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-api"}},[t._v("#")]),t._v(" C# API")]),t._v(" "),s("p",[t._v("Load the M2.NSudo assembly to your project, you will know the usage.")]),t._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("M2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NSudo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Demo")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Program")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSudoInstance")]),t._v(" instance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("NSudoInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateProcess")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                NSUDO_USER_MODE_TYPE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TRUSTED_INSTALLER"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                NSUDO_PRIVILEGES_MODE_TYPE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ENABLE_ALL_PRIVILEGES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                NSUDO_MANDATORY_LABEL_TYPE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SYSTEM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                NSUDO_PROCESS_PRIORITY_CLASS_TYPE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NORMAL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                NSUDO_SHOW_WINDOW_MODE_TYPE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DEFAULT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cmd"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            Console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ReadKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);