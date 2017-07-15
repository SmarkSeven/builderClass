# builderClass
结合ES6 Class 和原型链继承共享属性减少内存占用的案例

**use：**
```
shapeProto = new ShapreMaker()

for (let i = 0; i < 10; i++) {
  shapeProto.newShape(i, i/10, -i/10)
}
```
静态属性被保存早原型对象上，避免每个对象都保存一份副本，可以减少内存占用，当数据量较大时，效果尤为明显。
