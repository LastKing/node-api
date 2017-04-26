#include <node.h>

namespace demo{

    using v8::Exception;
    using v8::FunctionCallbackInfo;
    using v8::Isolate;
    using v8::Local;
    using v8::Number;
    using v8::Object;
    using v8::String;
    using v8::Value;

    void Add(const FunctionCallbackInfo<Value>&args){
        Isolate* isolate=args.GetIsolate();

        //检查传入的参数的个数
        if(args.Length()<2){
            // 抛出一个错误并传回到 JavaScript
            //（这不是lambda 表达式。。。是指针的方法调用表达式是 -> 只有一个横杠，中文不能好过4个字。。。。）
            isolate->ThrowException(Exception::TypeError(String::NewFromUtf8(isolate,"Wrong number of arguments")));
            return;
        }

        // 检查参数的类型
        if(!args[0]->IsNumber() ||!args[1]->IsNumber()){
            isolate->ThrowException(Exception::TypeError(
                String::NewFromUtf8(isolate,"Wrong arguments")));
            return;
        }

        //执行操作
        double value=args[0]->NumberValue() +args[1]->NumberValue();
        Local<Number> num=Number::New(isolate,value);

        //设置返回值
        args.GetReturnValue().Set(num);
    }

    void Init(Local<Object> exports){
        NODE_SET_METHOD(exports,"add",Add);
    }

    NODE_MODULE(addon,Init);
}
