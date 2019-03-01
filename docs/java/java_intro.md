# java简介和初探
## 计算机语言简介  
计算机语言：（Computer Language）指用于人与计算机之间通讯的语言。计算机语言是人与计算机之间传递信息的媒介。计算机系统最大特征是指令通过一种语言传达给机器。为了使电子计算机进行各种工作，就需要有一套用以编写计算机程序的数字、字符和语法规划，由这些字符和语法规则组成计算机各种指令（或各种语句）。这些就是计算机能接受的语言。程序员通过这些指令来指挥计算机进行各种工作。  

计算机语言主要由`机器语言`、`汇编语言`、`高级语言`，组成。 

机器语言：毋庸置疑是计算机可以直接识别和使用的语言。但是在编程的时候，通常不会选择机器语言，因为机器语言都是由二进制`0`或`1`组成的编码。不便于编程人员的记忆与识别。汇编和高级语言是编程人员常用的语言.  

汇编语言：采用英文缩写的标识符，容易识别和记忆。那么为什么不都用汇编语言编程，这就要解释什么是高级语言。  

高级语言：采用更接近人类的自然语言进行编程，进一步简化了程序编程的过程，所以，大多数编程者会选择高级语言。 

现在我们讲解的Java语言就是高级语言的一种。  
## 什么是java
Java是SUN(Stanford University Network，斯坦福大学网络公司)1995年推出的一门高级编程语言，是一种面向Internet的编程语言。随着Java技术在web方面的不断成熟，已经成为Web应用程序的首选开发语言。

Java是一种可以撰写跨平台应用程序的、面向对象的程序设计语言。简单说，Java就是一种语言，不过是一种针对jvm的语言，Java编译后是字节码，而jvm会把这些字节码解释成机器码，然后做出相应的动作。所以java立下的flag是<Badge text="一次编写到处运行"/>


Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程 。
 
## java语言发展简史
>詹姆斯·高斯林（James Gosling） SUN– (Stanford University Network斯坦福大学网络公司)  
>1990年初，最初被命名为Oak； 
>1995年5月23日，Java语言诞生   
>1996年1月 JDK1.0  
>1997年2月 JDK1.1  
>1998年12月 JDK1.2(将Java分成了J2SE,J2EE,J2ME)  
>2000年5月 J2SE1.3  
>2002年2月 J2SE1.4(1.4.2版本很多公司在使用)  
>2004年10月  JDK1.5(改名JavaSE5.0,JavaEE,JavaME)  
>2006年12月 JavaSE6.0  
>2009年04月20日，甲骨文(Oracle)74亿美元收购Sun。   
>2011年7月  JavaSE7.0(市场主流版本)  
>2014年3月 JavaSE8.0  
>2017年9月 JavaSE9.0  

## java的特点
1.简单  
>Java看起来设计的很像C++，但是为了是语言小和容易熟悉，设计者把C++语言种许多复杂晦涩难懂的特性去掉了，这些特征是一般程序员很少使用的，例如：Java不支持go to语句，代之以提供break和continue语句以及异常处理。Java还剔除了C++的操作符过载 （重载overload）和多继承特征，并且不使用主文件，免去了预处理程序。因为Java没有结构，数组和串都是对象，所以不需要指针。Java能够自动处理对象的引用和间接引用，实现自动的内存分配和释放（垃圾回收机制）使用户不必为存储（内存）管理问题烦恼，能把更多的时间和精力花在研发上。  

2.完全面向对象 功能强大的内置功能包库  

>Java是一个面向对象的语言，对程序员来说，这意味着要注意应用数据和操作数据的方法（method），而不是严格地用过程来思考。在一个面向对象的系统中，类（class）是数据和操作数据的方法和集合。数据和方法一起描述对象（object）的状态和行为。每一对象是其状态和行为的封装。类是按一定体系和层次安排的，使得子类可以从超类继承行为。在这个类层次体系中有一个根类，它是具有一般行为的类。Java程序是很容易组织成较大规模程序的。
>为了简单起见，只支持类之间的单继承，支持接口之间的多继承，并支持类与接口之间的实现机制（关键字implements）。Java语言全面支持动态绑定，而C++语言只对函数使用动态绑定。

>Java还包括一个类的扩展集合，分别组成各种程序包（package），用户可以在自己的程序中使用。例如，Java提供产生图形用户接口的类（java.awt包），这里awt是抽象窗口工具集（abstract windowing tookit）的缩写，处理输入输出的类（java.io包）和支持网络功能的类（java.net包）。

3.可移植性好  

>Java使得语言声明不依赖与实现的方面。例如，Java显示说明每个基本数据类型的大小和它的运算行为（这些数据类型由Java语法>描述）。

>Java环境本身对新的硬件平台和操作系统是可移植的。Java编译程序也用Java编写，而Java运行系统用ANSIC语言编写

4.健壮性  
>Java原来是用作编写消费类家用电子产品软件的语言，所以他是被设计成高可靠和稳健软件的。Java消除了某些编程错误，使得用它写可靠软件相当容易。

>Java是一个强类型语言，它允许扩展编译时检查潜在类型不匹配问题的功能。Java要求显示方法声明，它不支持C语言风格的隐式声明。这些严格的要求保证编译程序能捕捉调用错误，这就导致会开发出更可靠的程序。

>可靠性方面最重要的增强之一是Java的存储模型。Java不支持指针，它消除重新存储和讹误（文字错误；字句上的疏漏差误）数据。类似的，Java自动的“无用单元收集”预防存储漏泄和其它有关动态存储分配和解除分配的有害错误。Java解释程序员也执行许多运行时的检查，诸如验证所有数组和串访问是否在界限之内。  

5.多线程  

>Java语言是支持多线程的，所谓的多线程可以简单地理解为程序中有多个任务可以并发执行，这样可以在很大程度上提高程序的执行效率。  

6.高性能  

>Java是一种先编译后解释的语言，所以他不如全编译性语言快。但是有些情况下性能是很要紧的，为了支持这些情况，Java设计者制作了“及时”编译程序，它能在运行时吧Java字节码翻译成特定CPU（中央处理器）的机器代码，也就是实现全编译了。

>Java字节码格式设计时考虑到这些“及时”编译程序的需要，所以生成机器代码的过程相当简单，它能产生相当好的代码。  

7.安全性  

>Java的存储分配模型是它防御恶意代码的主要方法之一。Java没有指针，所以程序员不能得到隐蔽起来的内幕和伪造指针去指向存储器。更重要的是，Java编译程序不处理存储安排决策，所以程序员不能通过查看声明去猜测类的实际存储安排。编译的Java代码中存储引用在运行时由Java解释程序决定实际存储地址。

>Java运行系统使用字节码验证过程保证装载到网络上的代码不违背任何Java语言限制。这个安全机制部分包括类如何从网上装载。例如，装载的类是放在分开的名字空间而不是局部类，预防恶意的小应用程序用它自己的版本来代替标准Java类。

>Java语言不支持指针，一切对内存的访问都必须通过对象的实例变量来实现，从而使应用更安全。  

8.分布式  

>Java设计成支持在网络上应用，它是分布式语言，Java既支持各种层次的网络连接，又以Socket类支持可靠的流（steam）网络连接，所以用户可以产生分布式的客户机和服务器。网络变成软件应用的分布运载工具。Java程序只需编写一次，就可到处运行。

## java的用途 领域
Java可以编写桌面应用程序、Web应用程序、分布式系统和嵌入式系统应用程序等。
## java的版本
常用的 java 程序分为  Java SE、java EE、Java ME三个版本，介绍如下：

1. Java SE（Java Platform，Standard Edition）
>java se 以前称为J2SE。它允许开发和部署在桌面、服务器、嵌入式环境和实时环境中使用的 Java 应用程序。Java SE是基础包，但是也包含了支持 Java Web 服务开发的类，并为 Java Platform，Enterprise Edition（Java EE）提供基础。

2. java ee（Java Platform，Enterprise Edition）。
>这个版本以前称为 J2EE。企业版本帮助开发和部署可移植、健壮、可伸缩且安全的服务器端 Java 应用程序。Java EE 是在 Java SE 的基础上构建的，它提供 Web 服务、组件模型、管理和通信 API，可以用来实现企业级的面向服务体系结构（service-oriented architecture，SOA）和 Web 2.0 应用程序。

3. Java ME（Java Platform，Micro Edition）。
>这个版本以前称为 J2ME。Java ME 为在移动设备和嵌入式设备（比如手机、PDA、电视机顶盒和打印机）上运行的应用程序提供一个健壮且灵活的环境。Java ME 包括灵活的用户界面、健壮的安全模型、许多内置的网络协议以及对可以动态下载的连网和离线应用程序的丰富支持。基于 Java ME 规范的应用程序只需编写一次，就可以用于许多设备，而且可以利用每个设备的本机功能。

说得更简单片面一点：

Java SE 是做电脑上运行的软件。  
Java EE 是用来做网站的（我们常见的JSP等技术）  
Java ME 是做手机软件的  

我们这里先只介绍 Java SE
### Java SE的架构

JRE为Java的运行时环境，是运行Java程序依赖的。如果仅仅是运行已经存在的Java程序，只安装JRE即可。
JDK为Java的开发环境，是开发时依赖的。包含JRE。
没有JDK的话，无法编译Java程序，如果想只运行Java程序，要确保已安装相应的JRE。
Java语言通过在不同的操作系统上安装对应的Java虚拟机实现了跨平台， 即java的.class程序可以在不同操作系统上均可以运行。(java的.class文件相当于Windows中的.exe文件，是可执行的程序)  

#### jdk jre架构图
<img :src="('/jdkjre.png')" alt="foo">

#### jdk jre jvm关系图

<img :src="('/jdkjre1.png')" alt="foo">

<img :src="('/jdkjre2.png')" alt="foo">


### 学会使用命令
这是为了理解操作系统概念和写一个java程序做准备

1 简单windows命令

打开"运行"对话框(Win+R),输入cmd,打开控制台命令窗口再输入dir命令 //查看当前目录下的文件，类似于linux下的ls

2 背景知识

字符操作系统到图形操作系统
<img :src="('/export2.png')" alt="foo">
systeminfo 对应windows的 电脑详情

## 第一个java Hello World程序
我们怎么来编写第一个java程序尼 步骤如下:
<img :src="('/j_process.png')" alt="foo">  
1.准备一个可用的文本编辑器 记事本即可 用文本编辑器编写以下内容 并且命名为Test.java 内容要和下图一样
```java
public class Test {
    public static void main(String args[]){
        System.out.println("Hello World!");
    }
}
```

2.安装jdk  注意我们这里下的jdk8版本
* jdk下载  [下载网站链接](https://www.java.com/zh_CN/download/)
* jdk安装: 双击安装 
* 验证java jdk安装是否成功 和配置环境变量在cmd命令中输入java javac命令，参考 [Win10系统配置jdk1.7环境，环境变量配置问题](https://blog.csdn.net/weixin_39683776/article/details/81361043) 配置 注意安装步骤可以省略

配置好后 可以出现如下图的提示的话代表安装配置成功

<img :src="('/jdktest2.jpeg')" alt="foo"> 


思考 为什么要配置环境变量???

3.找到刚刚编写好的Test.java文件所在的目录 用javac命令 编译它得到一个Test.class文件
```bash
javac Test.java
```
4.用java命令 执行Test.class文件得到程序的执行结果 
```bash
java Test.class
```

得到在控制台上打印Hello World!结果 如下图所示:  
<img :src="('/WX20190216-182300@2x.png')" alt="foo">  

其执行过程为下图: 


<img :src="('/java_layers.png')" alt="foo">  

   
## 切换到IDE
集成开发环境（IDE，Integrated Development Environment ）是用于提供程序开发环境的应用程序，一般包括代码编辑器、编译器、调试器和图形用户界面等工具。集成了代码编写功能、分析功能、编译功能、调试功能等一体化的开发软件服务套。所有具备这一特性的软件或者软件套（组）都可以叫集成开发环境

java IDE的好处：
智能提示
自动编译执行
界面友好

[Java 程序员最喜欢的 11 款免费 IDE 编辑器](https://blog.csdn.net/nine_mink/article/details/79199868)

::: tip
在这里我所演示的是IntelliJ IDEA 推荐也是安装这个商用版 
:::
## 怎么样学好java
<img :src="('/learn0.png')" alt="foo"> 
<img :src="('/learn1.png')" alt="foo"> 
资料权威重要性:
官方文档 > 书籍 > 优质的博客 > 百度 > 
动手 > 思考 > 问 > 抄
## 程序员三大美德  
Laziness: The quality that makes you go to great effort to reduce overall energy expenditure. It makes you write labor-saving programs that other people will find useful and document what you wrote so you don't have to answer so many questions about it.  

懒惰： 
是这样一种品质，它使得你花大力气去避免消耗过多的精力。它敦促你写出节省体力的程序，同时别人也能利用它们。为此你会写出完善的文档，以免别人问你太多问题。 

Impatience: The anger you feel when the computer is being lazy. This makes you write programs that don't just react to your needs, but actually anticipate them. Or at least pretend to.


急躁： 
是这样一种愤怒，当你发现计算机懒洋洋地不给出结果。于是你写出更优秀的代码，能尽快真正的解决问题。至少看上去是这样。 

Hubris: The quality that makes you write (and maintain) programs that other people won't want to say bad things about.

傲慢： 
极度的自信，使你有信心写出（或维护）别人挑不出毛病的程序

## API文档

## 实践练习
更改代码输出 在控制台输出  这是我的第一个java程序 如下图所示
<img :src="('/WX20190216-182355@2x.png')" alt="foo">