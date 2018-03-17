# vm (virtual machine)

用途： create a sandbox environment where your can safely run other scripts.
创建一个安全的隔离的沙箱空间

参数主题就2点 **script**和**上下文共享关系**

感觉基础就是
* vm.script 创建script
* script.runInContext        能局部影响当前作用域的对象  (context对象)
* script.runInNewContext     能局部影响当前作用域的对象  (普通对象)    **这两货**注意看代码的细微差别
* script.runInThisContext    相当于一个全新的环境中执行代码
* vm.createContext
* vm.runInContext
* vm.runInNewContext
* vm.runInThisContext
注意以上方法所属的对象，有属于script有属于vm