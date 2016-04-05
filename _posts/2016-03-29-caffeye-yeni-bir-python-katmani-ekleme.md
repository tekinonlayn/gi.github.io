---
layout: post
title: "Caffe'ye yeni bir Python katmanı ekleme"
date: 2016-03-29
---
excerpt_separator: <!--more-->
Caffe'de temel hesaplama birimleri katmanlardır. Her katmanın kendine özgü görevleri vardır.
<!--more-->
Out-of-excerpt
Caffe'de temel hesaplama birimleri katmanlardır. Her katmanın kendine özgü görevleri vardır. Bir hesaplama yapmak isterseniz, o hesabın yapıldığı katmanı, oluşturmuş olduğunuz ağa (net) eklemeniz yeterlidir.<br />
Caffe ile birlikte gelen makine öğrenmesinde kullanılabilecek birçok fonksiyon/katman mevcut. Ancak bazen sizin istediğiniz bir işi, var olan fonksiyonlar yerine getirmeyebilir. Ya da sizin probleminize özgü bir fonksiyon yazılması gerekebilir. Bu durumda yeni bir katman eklemekten başka çare yoktur.<br />
Caffe'de yeni bir katman eklemek kolaydır. Hele bir de python katmanı eklenecekse bu daha da kolaydır.<br />
Baştan itibaren bir python katmanı nasıl eklenir, sırasıyla yazalım:<br /><br />
<span style="background-color: #cccccc;"><b>1.</b>&nbsp;<i>/include/caffe/python_layer.hpp</i></span><br />
python_layer.hpp başlık dosyasının gerekli dizinde olması gerekir, yoksa eğer kendimiz elle oluşturacağız. (<a href="https://github.com/longjon/caffe/commit/a48990d5951e4c5d286b7d0dfdf04b8afa9cfb62" target="_blank">url</a>)
<br /><br />
<span style="background-color: #cccccc;"><b>2.</b> <i>/src/caffe/layer_factory.cpp</i></span><br />
bu dosyada python_layer için gerekli düzenlemeleri yapmamız gerekir. Eğer Caffe'yi son sürümde kullanıyorsanız değişiklik yapmaya gerek yok.<br /><br />
<span style="background-color: #cccccc;"><b>3.</b> <i>/src/caffe/layers/python_layer.cpp</i></span><br />
dosyası (eğer yoksa) gösterilen dizinde oluşturulmalıdır. Bu dosya da son sürümle beraber geliyor. (<a href="https://github.com/longjon/caffe/commit/a48990d5951e4c5d286b7d0dfdf04b8afa9cfb62" target="_blank">url</a>)
<br /><br />
<span style="background-color: #cccccc;"><b>4.</b> <i>/src/caffe/proto/caffe.proto</i></span><br />
protobuffer dosyası son sürümle beraber geldiği için değişiklik yapmaya gerek kalmıyor.<br /><br />
<span style="background-color: #cccccc;"><b>5.</b> <i>Makefile.config</i> dosyasında</span><br />
WITH_PYTHON_LAYER := 1 satırındaki yorum işleci kaldırılmalıdır.<br />
<br />
Bu değişikliklerin etkinleşmesi için caffe'yi yeniden derlemek gerekiyor. Bunun için caffe dizininde sırasıyla<br />
<pre>
make pycaffe
make all
make test
make runtest
</pre>
komutları verilmelidir. Buraya kadar anlatılanlar python katmanı oluşturmak için altyapıyı kurmak içindi. Şimdi python katmanı oluşturmaya başlayabiliriz. İşe örnek bir prototxt oluşturmakla başlayalım:<br /><br />
<i>"Ekle10.prototxt"</i>
<pre class="prettyprint">
name: 'Ekle10'
input: 'data'
input_shape {
  dim: 1
  dim: 1
  dim: 1
  dim: 1
}

layer {
  name: "ekle10"
  type: "Python"
  bottom: "data"
  top: "ekle10_output"
  python_param {
    module: "Ekle10Modul"
    layer: "Ekle10Layer"
  }
  loss_weight: 1
}</pre>
Bu oluşturduğumuz prototxt iki tane katmandan oluşuyor. İlki bir adet 4-Boyutlu tensor. Bu tensor sadece bir değer içerecek. İkinci katman ise basit bir şekilde birinci katmandan gelen değere 10 ekleyip çıkışa verecek. Oluşturduğumuz ağ (net) aşağıda görülüyor.
<table align="center">
<tr><td style="text-align: center;">
<img src="/img/sampleNet_prototxt.png" text-align="center"></td></tr>
<tr><td class="tr-caption" style="text-align: center;">Şekil-1. Oluşan ağın görüntüsü</td></tr>
</table>

Verilen girdiye 10 ekleyen katmanı şimdi yazabiliriz:<br /><br />
<i>"Ekle10Modul.py"</i>
<pre class="prettyprint">
import caffe
class Ekle10Layer(caffe.Layer):
    
    #Girdiye 10 ekleyen python katmanı.
    def setup(self, bottom, top):
        pass
    
    #girdi boyutlarını caffe'nin kendi boyutlarına uydurmamız gerekiyor.
    def reshape(self, bottom, top):
        top[0].reshape(bottom[0].num, bottom[0].channels,
         bottom[0].height, bottom[0].width)
    
    #Sadece forward işlemi yapılacak.
    def forward(self, bottom, top):
        top[0].data[...] = bottom[0].data + 10
    
    #Gradient hesabı olmayacağı için backward yapmaya da gerek yok.
    def backward(self, top, propagate_down, bottom):
        pass
</pre>
Python katmanının kodunu da yazdığımıza ($PYTHONPATH içinde olmasına dikkat edin) göre doğru çalışıp çalışmadığını kontrol edelim:<br />
<pre class="prettyprint">
import caffe
import numpy as np
net = caffe.Net('Ekle10.prototxt', caffe.TEST)
input1 = np.array([[[[100]]]])
net.blobs['data'].data[...] = input1
net.forward()
net.blobs['ekle10_output'].data[0][0][0][0]
</pre>
Bunun sonucunda verilen 100 değerine 10 eklenmiş olarak 110.0 değerini (float32) elde ederiz.<br />
Bu yazıda, baştan sona Caffe için bir python katmanı oluşturduk. Bunun için önce alt yapı değişikliklerini gerçekleştirdik. Bundan sonra istenilen görevi yapan python katmanı yazdık. En son aşamada ise yazdığımız katmanın düzgün çalışıp çalışmadığını kontrol ettik. Gerçekten de oluşturduğumuz katman kendisinden istenilen görevi, basit şekilde gelen veriye 10 ekleme işini, yaptığını gördük.
