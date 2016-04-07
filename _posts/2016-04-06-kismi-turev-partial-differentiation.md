---
layout: post
title: "Makine Öğrenmesi'nde Kısmi Türev"
date: 2016-04-06
---
Hep söylenir, makine öğrenmesi matematiksel olarak kısmi türeve ve lineer cebire dayanır.<!--more--> Matematiksel işlem yapılacaksa ya bu ikisi kullanılır ya da basitçe lise düzeyindeki matematikten yararlanılır. O halde makine öğrenmesi ve buna dayalı olan teknikleri derinine öğrenebilmemiz için lineer cebir ve türevi iyi biliyor olmamız gerekir. Bunlar bilinmeden de sadece bize gösterilen sonuç formülünü bilgisayara hesaplatabiliriz ancak neyin nereden geldiğini bilebilmemiz için, bu gibi konularda derinleşmemiz gerekir. Birkaç gün önce yazdığımız lineer cebir ile ilgili <a href="/blog/2016/04/03/ufak-bir-lineer-cebir-numarasi">yazıdan</a> sonra şimdi de kısmi türev konusuna giriş yapabiliriz. 

<b>Kısmi Türev</b>
$$\mathrm f$$, iki veya daha fazla bağımsız değişkenin fonksiyonu olsun. Kısmi türev; f fonksiyonun, bağımsız değişkenlerinin herhangi bir yöndeki değişim oranlarına bağlı olarak gösterdiği değişimin bulunmasıdır.

$$f(x,\;y)$$ gibi iki değişkenli bir fonksiyonumuz olsun. $$f$$'in $$x$$'e göre kısmi türevi, normal türev kurallarının uygulanmasıyla bulunur. Normal türev kurallarından tek farkı, ikinci değişken $$y$$'ye sabit sayı muamelesi yapılır. $$f$$'in $$y$$'ye göre kısmi türevinde de, yine aynı şekilde bu sefer $$x$$'e sanki sabit bir sayıymış gibi muamele yapılır. Sabit bir sayının türevi sıfırdır. Çarpmada sabit sayı türev dışına çıkarılır, kalanların türevi alınır.

İkiden fazla değişkenli fonksiyonlarda da aynı yöntem uygulanır. Örneğin $$f$$'in $$x$$'e göre kısmi türevi alınırken, $$x$$ için normal türev kuralları uygulanır. Diğer değişkenlere $$(y,\;z,\;t,\;...)$$ sabit sayı gibi davranılır.

$$f$$'in $$x$$'e göre kısmi türevi: $$\frac{\partial f}{\partial x},\;\;\mathrm{ya}\;\mathrm{da}\;f_x\;\;\mathrm{olarak}$$
$$f$$'in $$y$$'ye göre kısmi türevi: $$\frac{\partial f}{\partial y},\;\;\mathrm{ya}\;\mathrm{da}\;f_y\;\;\mathrm{olarak}$$ gösterilebilir.

Örnek-1: 
<p>$$\begin{array}{l}f(x,\;y)\;=\;x^9y^8\;+\;2x\;+\;y^3\\\mathrm o\;\mathrm{halde}\\f_x=\;9x^8y^8\;+\;2,\\f_y=\;8x^9y^7\;+\;3y^2.\end{array}$$</p>

Örnek-2: 
<p>$$\begin{array}{l}f(x,\;y)\;=\:e^{xy}\;-\;\ln(xy)\;+\;y^2\;\sin(4x)\;+\;2x^3\;-\;5y\\\mathrm o\;\mathrm{halde}\\f_x=ye^{xy}\;-\;{\textstyle\frac1x}\;+\;4y^2\;\cos(4x)\;+\;6x^2,\\f_y=xe^{xy}\;-\;{\textstyle\frac1y}\;+\;2y\;\sin(4x)\;-\;5.\end{array}$$</p>

Yüksek Dereceli Kısmi Türevler

Herhangi bir değişkene göre kısmi türev bir defa alındıktan sonra, aynı şekilde herhangi bir değişkene göre tekrar kısmi türev alınabilir. İki defa üst üste kısmi türev alınmasıyla ikinci dereceden kısmi türev alınmış olur. Böyle yapılarak üçüncü, dördüncü veya daha yüksek dereceli kısmi türevler alınabilir.

$$f_x$$ ve $$f_y$$ yukarıda gösterildiği gibi sırasıyla $$x$$ ve $$y$$'ye göre kısmi türevler olsun.

$$f_x$$'in $$x$$'e göre kısmi türevi: 
<p>$$\frac\partial{\partial x}(\frac{\partial f}{\partial x})\;=\;\frac{\partial^2f}{\partial x^2}\;\mathrm{ya}\;\mathrm{da}\;\;f_{xx}\;\mathrm{olarak}$$</p>
$$f_x$$'in $$y$$'ye göre kısmi türevi:
<p>$$\frac\partial{\partial y}(\frac{\partial f}{\partial x})\;=\;\frac{\partial^2f}{\partial y\partial x}\;\mathrm{ya}\;\mathrm{da}\;\;f_{xy}\;\mathrm{olarak}$$</p>
gösterilebilir.

Örnek2'de kısmi türevler
<p>$$\begin{array}{l}f(x,\;y)\;=\:e^{xy}\;-\;\ln(xy)\;+\;y^2\;\sin(4x)\;+\;2x^3\;-\;5y\\\mathrm o\;\mathrm{halde}\\f_x=ye^{xy}\;-\;{\textstyle\frac1x}\;+\;4y^2\;\cos(4x)\;+\;6x^2,\\f_y=xe^{xy}\;-\;{\textstyle\frac1y}\;+\;2y\;\sin(4x)\;-\;5.\end{array}$$</p>
olarak bulunmuştu.
Bir kere daha kısmi türevler alınırsa (dört taneden ikisi):
<p>$$\begin{array}{l}f_{xx}\;=\;\frac\partial{\partial x}f_x\;=\;y^2e^{xy}\;+\;{\textstyle\frac1{x^2}}\;-\;16y^2\;\sin(4x)\;+\;12x,\\f_{xy}\;=\;\frac\partial{\partial y}f_x\;=\;(e^{xy}\;+\;xye^{xy})\;+\;8y\;\cos(4x)\end{array}$$</p>
olarak ikinci dereceden kısmi türevler bulunmuş olur.

Bu şekilde ikinci kısmi türevlerde dört ayrı kısmi türev alınmış olur.

Kısmi Türevde Zincir Kuralı

$$x$$ ve $$y$$; $$t$$'ye bağlı fonksiyonlar,
$$f$$; $$x$$ ve $$y$$'nin bir fonksiyonu olsun.
Yani: $$f(x,\;y),\;x\;=\;g(t)\;ve\;y\;=\;h(t)\;\mathrm{olarak}\;\mathrm{tanımlıdırlar}.\;$$

$$f$$ fonksiyonunun $$t$$'ye göre kısmi türevi şöyle bulunur:
<p>$$\frac{\operatorname df}{\operatorname dt}\;=\;\frac{\partial f}{\partial x}\frac{\operatorname dx}{\operatorname dt}\;+\;\frac{\partial f}{\partial y}\frac{\operatorname dy}{\operatorname dt}$$</p>
