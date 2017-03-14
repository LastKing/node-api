#node 加密 套路学习

主要 有几个方面
* Hash      （md，sha系列）
* Hmac      （Hash与密钥）
* 签名与验证（Hash与公私钥）
* 加密与解密
*

##Hash
>哈希算法，是指将任意长度的二进制值映射为较短的固定长度的二进制值，这个小的二进制值称为哈希值。哈希值是一段数据唯一且极其紧凑的数值表示形式。

##Hmac
>HMAC是密钥相关的哈希运算消息认证码（Hash-based Message Authentication Code）,HMAC运算利用哈希算法，以一个密钥和一个消息为输入，生成一个消息摘要作为输出。HMAC可以有效防止一些类似md5的彩虹表等攻击，比如一些常见的密码直接MD5存入数据库的，可能被反向破解。

##加密与解密（可逆）
* 对称加密算法的原理很容易理解，通信一方用KEK加密明文，另一方收到之后用同样的KEY来解密就可以得到明文。
* 不对称加密算法，使用两把完全不同但又是完全匹配的一对Key:公钥和私钥。在使用不对称加密算法加密文件时，只有使用匹配的一对公钥和私钥，才能完成对明文的加密和解密过程。

##签名和验证算法
>我们除了对数据进行加密和解密，还需要判断数据在传输过程中，是否真实际和完整，是否被篡改了。那么就需要用到签名和验证的算法，利用不对称加密算法，通过私钥进行数字签名，公钥验证数据的真实性。

1. [node中crypto浅析](https://cnodejs.org/topic/504061d7fef591855112bab5)
2. [node.js加密算法库Crypto](http://blog.fens.me/nodejs-crypto/)
3. [DiffieHellman类生成交换密钥](https://itbilu.com/nodejs/core/EknZWVKt.html)
4. 实例[使用RSA对字符串加密解密](http://blog.shiqichan.com/encrypt-and-decrypt-string-with-rsa/)

