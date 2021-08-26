(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{408:function(a,e,_){"use strict";_.r(e);var t=_(28),s=Object(t.a)({},(function(){var a=this,e=a.$createElement,_=a._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h1",{attrs:{id:"nsudo-共享庫"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#nsudo-共享庫"}},[a._v("#")]),a._v(" NSudo 共享庫")]),a._v(" "),_("h2",{attrs:{id:"nsudocreateprocess-函數"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#nsudocreateprocess-函數"}},[a._v("#")]),a._v(" NSudoCreateProcess 函數")]),a._v(" "),_("p",[a._v("創建一個新進程和對應的主線程。")]),a._v(" "),_("h3",{attrs:{id:"c-c-函數原型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#c-c-函數原型"}},[a._v("#")]),a._v(" C/C++ 函數原型")]),a._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v("EXTERN_C HRESULT WINAPI NSudoCreateProcess(\n    _In_ NSUDO_USER_MODE_TYPE UserModeType,\n    _In_ NSUDO_PRIVILEGES_MODE_TYPE PrivilegesModeType,\n    _In_ NSUDO_MANDATORY_LABEL_TYPE MandatoryLabelType,\n    _In_ NSUDO_PROCESS_PRIORITY_CLASS_TYPE ProcessPriorityClassType,\n    _In_ NSUDO_SHOW_WINDOW_MODE_TYPE ShowWindowModeType,\n    _In_ DWORD WaitInterval,\n    _In_ BOOL CreateNewConsole,\n    _In_ LPCWSTR CommandLine,\n    _In_opt_ LPCWSTR CurrentDirectory);\n")])])]),_("h3",{attrs:{id:"usermodetype-參數"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#usermodetype-參數"}},[a._v("#")]),a._v(" UserModeType 參數")]),a._v(" "),_("p",[a._v("一個類型爲 NSUDO_USER_MODE_TYPE 枚舉類型的值, 用以表示用戶類別。")]),a._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v("typedef enum class _NSUDO_USER_MODE_TYPE\n{\n    DEFAULT,\n    TRUSTED_INSTALLER,\n    SYSTEM,\n    CURRENT_USER,\n    CURRENT_PROCESS,\n    CURRENT_PROCESS_DROP_RIGHT\n} NSUDO_USER_MODE_TYPE, *PNSUDO_USER_MODE_TYPE;\n")])])]),_("h3",{attrs:{id:"privilegesmodetype-參數"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#privilegesmodetype-參數"}},[a._v("#")]),a._v(" PrivilegesModeType 參數")]),a._v(" "),_("p",[a._v("一個類型爲 NSUDO_PRIVILEGES_MODE_TYPE 枚舉類型的值, 用以表示特權類型。")]),a._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v("typedef enum class _NSUDO_PRIVILEGES_MODE_TYPE\n{\n    DEFAULT,\n    ENABLE_ALL_PRIVILEGES,\n    DISABLE_ALL_PRIVILEGES\n} NSUDO_PRIVILEGES_MODE_TYPE, *PNSUDO_PRIVILEGES_MODE_TYPE;\n")])])]),_("h3",{attrs:{id:"mandatorylabeltype-參數"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mandatorylabeltype-參數"}},[a._v("#")]),a._v(" MandatoryLabelType 參數")]),a._v(" "),_("p",[a._v("一個類型爲 NSUDO_MANDATORY_LABEL_TYPE 枚舉類型的值, 用以表示完整性標籤。")]),a._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v("typedef enum class _NSUDO_MANDATORY_LABEL_TYPE\n{\n    UNTRUSTED,\n    LOW,\n    MEDIUM,\n    MEDIUM_PLUS,\n    HIGH,\n    SYSTEM,\n    PROTECTED_PROCESS,\n} NSUDO_MANDATORY_LABEL_TYPE, *PNSUDO_MANDATORY_LABEL_TYPE;\n")])])]),_("h3",{attrs:{id:"processpriorityclasstype-參數"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#processpriorityclasstype-參數"}},[a._v("#")]),a._v(" ProcessPriorityClassType 參數")]),a._v(" "),_("p",[a._v("一個類型爲 NSUDO_PROCESS_PRIORITY_CLASS_TYPE 枚舉類型的值, 用以表示進程優先級。")]),a._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v("typedef enum class _NSUDO_PROCESS_PRIORITY_CLASS_TYPE\n{\n    IDLE,\n    BELOW_NORMAL,\n    NORMAL,\n    ABOVE_NORMAL,\n    HIGH,\n    REALTIME,\n} NSUDO_PROCESS_PRIORITY_CLASS_TYPE, *PNSUDO_PROCESS_PRIORITY_CLASS_TYPE;\n")])])]),_("h3",{attrs:{id:"showwindowmodetype-參數"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#showwindowmodetype-參數"}},[a._v("#")]),a._v(" ShowWindowModeType 參數")]),a._v(" "),_("p",[a._v("一個類型爲 NSUDO_SHOW_WINDOW_MODE_TYPE 枚舉類型的值, 用以表示顯示窗口模式。")]),a._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v("typedef enum class _NSUDO_SHOW_WINDOW_MODE_TYPE\n{\n    DEFAULT,\n    SHOW,\n    HIDE,\n    MAXIMIZE,\n    MINIMIZE,\n} NSUDO_SHOW_WINDOW_MODE_TYPE, *PNSUDO_SHOW_WINDOW_MODE_TYPE;\n")])])]),_("h3",{attrs:{id:"waitinterval-參數"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#waitinterval-參數"}},[a._v("#")]),a._v(" WaitInterval 參數")]),a._v(" "),_("p",[a._v("等待創建的進程的時間 (毫秒)。")]),a._v(" "),_("h3",{attrs:{id:"createnewconsole-參數"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#createnewconsole-參數"}},[a._v("#")]),a._v(" CreateNewConsole 參數")]),a._v(" "),_("p",[a._v("如果這個參數設爲 TRUE, 新進程則在新的控制檯窗口運行, 否則則直接在父進程對應的控\n制臺窗口運行 (默認設定)。")]),a._v(" "),_("h3",{attrs:{id:"commandline-參數"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#commandline-參數"}},[a._v("#")]),a._v(" CommandLine 參數")]),a._v(" "),_("p",[a._v("要執行的命令行, 對應的字符串最大長度爲 32k 即 32768 字符, 命令行所執行的應用的\n路徑被限制爲 MAX_PATH 即 260 字符。")]),a._v(" "),_("h3",{attrs:{id:"currentdirectory-參數"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#currentdirectory-參數"}},[a._v("#")]),a._v(" CurrentDirectory 參數")]),a._v(" "),_("p",[a._v("用來指定進程的當前目錄, 需要使用完整路徑。可以使用 UNC 路徑。如果該參數爲\nnullptr, 新進程將使用調用該函數的進程所使用的當前路徑。")]),a._v(" "),_("h3",{attrs:{id:"返回值"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#返回值"}},[a._v("#")]),a._v(" 返回值")]),a._v(" "),_("p",[a._v("HRESULT 類型。如果函數調用成功, 則返回值爲 S_OK。")]),a._v(" "),_("h2",{attrs:{id:"c-接口"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#c-接口"}},[a._v("#")]),a._v(" C# 接口")]),a._v(" "),_("p",[a._v("在你的項目中加載 M2.NSudo 程序集, 你就會知曉其用法。")]),a._v(" "),_("h3",{attrs:{id:"代碼示例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#代碼示例"}},[a._v("#")]),a._v(" 代碼示例")]),a._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v('using System;\n\nnamespace M2.NSudo.Demo\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            NSudoInstance instance = new NSudoInstance();\n\n            instance.CreateProcess(\n                NSUDO_USER_MODE_TYPE.TRUSTED_INSTALLER,\n                NSUDO_PRIVILEGES_MODE_TYPE.ENABLE_ALL_PRIVILEGES,\n                NSUDO_MANDATORY_LABEL_TYPE.SYSTEM,\n                NSUDO_PROCESS_PRIORITY_CLASS_TYPE.NORMAL,\n                NSUDO_SHOW_WINDOW_MODE_TYPE.DEFAULT,\n                0,\n                true,\n                "cmd",\n                null);\n\n            Console.ReadKey();\n        }\n    }\n}\n')])])])])}),[],!1,null,null,null);e.default=s.exports}}]);