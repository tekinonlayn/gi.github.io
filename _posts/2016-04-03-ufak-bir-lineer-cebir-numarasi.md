---
layout: post
title: "Ufak Bir Lineer Cebir Numarası"
date: 2016-04-03
---
$$\mathrm A$$ matris, $$\mathrm x$$ ve $$\mathrm b$$ ise vektörlerimizi gösteren değişkenler olsun.
<p>$$\mathrm{Ax}\;=\;\mathrm b$$</p>
Eşitliğinde $$\mathrm A$$ matrisi ile $$\mathrm b$$ vektörünün bilindiğini varsayalım. O halde $$\mathrm x$$ vektörünü şöyle bulabiliriz.
<p>$$
\style{font-family:'Times New Roman'}{\style{font-size:14px}{\begin{array}{l}\mathrm{Ax}\;=\;\mathrm b\\\mathrm A^{-1\;}\mathrm{Ax}\;=\;\mathrm A^{-1}\mathrm b\\\mathrm{Ix}\;=\;\mathrm A^{-1}\mathrm b\\\mathrm x\;=\:\mathrm A^{-1}\mathrm b\\\end{array}}}
$$</p>
Burada $$\mathrm I$$ birim matristir.
O halde $$\mathrm x$$ vektörünü bulabilmemiz için $$\mathrm A$$ matrisinin tersini bulup, bulduğumuz matrisi $$\mathrm b$$ vektörüyle çarpma işlemine tabi tutmalıyız. Örneğin $$\mathrm A$$ şöyle bir matris olsun:
<p>$$\mathrm A\;=\;\begin{bmatrix}1&amp;-1&amp;-1\\-1&amp;\;\;\;2&amp;\;\;\;3\\1&amp;\;\;1&amp;\;\;\;4\end{bmatrix}$$</p>
$$\mathrm b$$ vektörü de şöyle olsun: 
<p>$$\begin{bmatrix}0\\5\\12\end{bmatrix}$$</p>
Bu durumda $$\mathrm A$$'nın tersi bir tanedir (unique) ve şöyledir:
<p>$$\mathrm A^{-1\;}\;=\;\begin{bmatrix}\;5&amp;\;3&amp;-1\\\;7&amp;\;5&amp;-2\\-3&amp;-2&amp;\;\;1\end{bmatrix}$$</p>
Şimdi $$\mathrm x$$ vektörünü bulabiliriz.
<p>$$\mathrm x\;=\;{\begin{bmatrix}\;5&amp;\;3&amp;-1\\\;7&amp;\;5&amp;-2\\-3&amp;-2&amp;\;\;1\end{bmatrix}}_{3\times3}\times\;\;\;{\begin{bmatrix}0\\5\\12\end{bmatrix}}_{3\times1}\;=\;\;\;{\begin{bmatrix}3\\1\\2\end{bmatrix}}_{3\times1}$$</p>
olur. <br /> 
Lise matematiğinden biliriz: Bilinmeyen değişkenleri bulabilmemiz için, bilinmeyen değişken sayısı kadar eşitliğin olması gerekir. Örneğin üç bilinmeyenli bir denklem sistemini çözmek için üç tane denklemin verilmesi gerekir. 1000 bilinmeyenli bir denklem sistemini çözmek istediğimizi düşünün! İşte burada matrisin tersini (inverse) bulmamız, böyle hesapsal işlemleri yapabilmemize olanak sağlamaktadır. Matrisin tersini bulmamız gerekiyorsa bunu da Octave/Matlab gibi bir ortam kolaylıkla yapacaktır: $$\mathrm{pinv}(\mathrm A)$$.
