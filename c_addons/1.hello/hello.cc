#include <node.h>

namespace demo {

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;

void Method(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  args.GetReturnValue().Set(String::NewFromUtf8(isolate, "This is my first hello world! --toonew"));
}

void Method2(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  args.GetReturnValue().Set(String::NewFromUtf8(isolate, "This is two!"));
}

//每个 c 模块都必须导出 一个 如下模式的初始化函数
void init(Local<Object> exports) {
  NODE_SET_METHOD(exports, "hello", Method);
  NODE_SET_METHOD(exports, "hello2", Method2);
}

//在 hello.cc 示例中，初始化函数是 init，插件模块名是 addon。
//NODE_MODULE (module_name , Initialize)  //模块名 ，初始化函数
NODE_MODULE(addon, init)

}  // namespace demo