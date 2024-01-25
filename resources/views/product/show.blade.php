<x-site-layout>
    <h2>Products Page</h2>

    <section>
        <article>
            <h2>{{$product->title}}</h2>
            <a href="{{route('product.show', $product)}}">Bekijk dit item</a>
        </article>
    </section>
</x-site-layout>