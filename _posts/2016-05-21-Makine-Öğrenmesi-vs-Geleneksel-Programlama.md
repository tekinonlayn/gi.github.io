---
layout: post
title: "Makine Öğrenmesi vs. Geleneksel Programlama"
date: 2016-05-21
---
KDnuggets sitesinde [1] denk geldiğim klasik yazılım mühendisliği ile makine öğrenmesinin arasındaki farkı güzel anlatan bir yazıyı Türkçeye çevirip kendi blogumda da yayınlamak istedim.<!--more--> Bu tür bir yazıyı başka bloglarda da görmüştüm ancak bunun daha derli toplu olduğunu düşünüyorum:

Yazılım mühendisliği bir görevi otomatikleştirmek için programlar ya da araçlar geliştirmeyle ilgilenir. Bir şeyi elle yapmaktansa program yazarız ve o programlar bilgisayarın anlayacağı dile çevrilir. Örnek vermek gerekirse: istenmeyen eposta filtreleme (spam email filtering). Eğer email istemcinin kaynak koduna sahipsek ve üzerinde değişiklik yapabilirsek, istenmeyen eposta sorunundan kurtulmak için çeşitli kurallar yazabiliriz. Örneğin "gönderen, listemizde değilse ve eposta konusunun içinde SATIN AL! gibi bir ifade varsa istenmeyen eposta kutusuna yolla; yok değilse ..." gibi.

Doğrusunu söylemek gerekirse böyle kurallar yazmak çok sıkıcıdır. Bunu yaptıktan sonra istenmeyen eposta filtremizi gerçek verilerle test etmemiz gerekir. Test edip sonuçlarını değerlendirmek, ve sonra kuralları güncellemek veya değiştirmek gerekir. Bu sürekli olarak böyle işleyecektir. Eğer görevi böyle otomatikleştirmezsek bunun yerine kendimiz elle istenmeyen epostaları ayıklamak durumunda kalacaktık.

Makine öğrenmesi ise otomasyon işini otomatikleştirmeyle uğraşır (otomatikleşmenin otomatikleşmesi). İstenmeyen eposta filtreleme için kurallar yazmaktansa bunun yerine, öğrenme algoritmasına gerekli verileri sunarız ve o da kendiliğinden kuralları öğrenir. Bu durumda "veri"nin, çözmek istediğimiz problemi iyi temsil ediyor olması gerekir. Örneğin, eposta filtresi için gerekli olan veriler, "çöp eposta" ve "çöp olmayan eposta" verilerinden oluşmalıdır. Böylece öğrenme algoritması neyin ne olduğunu kendisi öğrenecektir.

<table align="center">
<tr><td style="text-align: center;">
<img src="/img/trad-vs-ml-prog-paradigm.jpg" text-align="center"></td></tr>
<tr><td class="tr-caption" style="text-align: center;">Şekil-1. İki yaklaşımın karşılaştırılması</td></tr>
</table>

Geleneksel programlamada, kuralları kodlarız ve verileri bilgisayara verir, bilgisayarın istenilen sonucu vermesini bekleriz:
<ul><li><b>Kurallar + veri -> bilgisayar -> sonuçlar</b></li></ul>

Makine öğrenmesinde verileri alırız (epostalar), istenilen sonuca uygun bilgileri sağlarız ("çöp" ve "çöp olmayan" diye etiketleriz) ve bu bilgileri bir öğrenme algoritmasına sunarız. Bilgisayar bizim istediğimiz sonuca ulaşmak için kendiliğinden kuralları öğrenecektir:
<ul><li><b>Sonuçlar + veri -> öğrenme algoritması + bilgisayar -> kurallar</b></li></ul>

Diğer ifadeyle, makine öğrenmesi bir görevi otomatikleştirmek için en iyi komutları bulmaktadır. Makine öğrenmesi algoritmaları veriden hareket ederek komutlar bulmaya yarayan komutlardır denebilir. Bu yüzden makine öğrenmesi otomatikleştirmenin otomatikleştirilmesidir.

[1] http://www.kdnuggets.com/2016/05/explain-machine-learning-software-engineer.html
