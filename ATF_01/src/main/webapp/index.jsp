<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pagina</title>
        <link href="CSS/style.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>

        <header class="header">
            <div class="menu container">
                <a href="a" class="logo">Fashion & Luke</a>
                <input type="checkbox" id="menu"/>
                <label for="menu">
                    <img src="images/menu.png" class="menu-icono" alt="menu">                
                </label>
                <nav class="navbar">
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Contactos</a></li>
                    </ul>
                </nav>
                <div>
                    <ul>
                        <li class="submenu">
                            <img src="images/car.svg" id="img-carrito" alt="carrito">
                            <img src="images/i1.svg" id="img-gancho" alt="gancho">
                            <img src="images/i2.svg" id="img-plancha" alt="plancha">
                            <img src="images/i3.svg" id="img-colgador" alt="colgador">
                            <div id="carrito">
                                <table id="lista-carrito">
                                    <thead>
                                        <tr>
                                            <th>Images</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                        <tr></tr>
                                        </tr>
                                    </thead>
                                    <tbody></tbody>
                                </table>
                                <a href="#" id="vaciar-carrito" class="btn-2">Vaciar Carrito</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="header-content container">
                <div class="header-img">
                    <img src="images/right.png" alt="">
                </div>
                <div class="header-txt">
                    <h1>Ofertas especiales</h1>
                    <P>Estrena las Mejores Prendas</P>
                    <a href="#" class="btn-1">Informacion</a>
                </div>
            </div>

        </header>

        <section class="Ofert container">
            <div class="ofert-1">
                <div class="ofert-img">
                    <img src="images/f1.png" alt="">
                </div>
                <div class="ofert-txt">
                    <h3>Producto 1</h3>
                    <a href="#" class="btn-2">Informacion</a>
                </div>
            </div>
            <div class="ofert-2">
                <div class="ofert-img">
                    <img src="images/f2.png" alt="">
                </div>
                <div class="ofert-txt">
                    <h3>Producto 2</h3>
                    <a href="#" class="btn-2">Informacion</a>
                </div>
            </div>

            <div class="ofert-3">
                <div class="ofert-img">
                    <img src="images/f3.png" alt="">
                </div>
                <div class="ofert-txt">
                    <h3>Producto 3</h3>
                    <a href="#" class="btn-2">Informacion</a>
                </div>
            </div>
        </section>

        <main class="Products container" id="lista-1">

            <h2>Productos</h2>

            <div class="Product-content">

                <div class="Product">
                    <img src="images/1.png" alt="">
                    <div class="Product-txt">
                        <h3>Camisa Nautica</h3>
                        <p>Calidad Premium</p>
                        <p class="Precio">$200</p>
                        <a href="#" class="agregar-carrito btn-2" data-id="1">Agregar al carrito</a>
                    </div>
                </div>

                <div class="Product">
                    <img src="images/2.png" alt="">
                    <div class="Product-txt">
                        <h3>Chaqueta cortavientos</h3>
                        <p>Calidad Premium</p>
                        <p class="Precio">$300</p>
                        <a href="#" class="agregar-carrito btn-2" data-id="2">Agregar al carrito</a>
                    </div>
                </div>

                <div class="Product">
                    <img src="images/3.png" alt="">
                    <div class="Product-txt">
                        <h3>Casaca Adrenaline</h3>
                        <p>Calidad premium</p>
                        <p class="Precio">$400</p>
                        <a href="#" class="agregar-carrito btn-2" data-id="3">Agregar al carrito</a>
                    </div>
                </div>

                <div class="Product">
                    <img src="images/4.png" alt="">
                    <div class="Product-txt">
                        <h3>Camisa Zeroyaa</h3>
                        <p>Calidad Premium</p>
                        <p class="Precio">$250</p>
                        <a href="#" class="agregar-carrito btn-2" data-id="4">Agregar al carrito</a>
                    </div>
                </div>

                <div class="Product">
                    <img src="images/5.png" alt="">
                    <div class="Product-txt">
                        <h3>Basement</h3>
                        <p>Calidad Premium</p>
                        <p class="Precio">$150</p>
                        <a href="#" class="agregar-carrito btn-2" data-id="5">Agregar al carrito</a>
                    </div>
                </div>

                <div class="Product">
                    <img src="images/6.png" alt="">
                    <div class="Product-txt">
                        <h3>Abrigo Capucha</h3>
                        <p>Calidad Premium</p>
                        <p class="Precio">$230</p>
                        <a href="#" class="agregar-carrito btn-2" data-id="6">Agregar al carrito</a>
                    </div>
                </div>

            </div> 

        </main>

        <div class="blog container">

            <div class="blog-1">
                <img src="images/b1.jpg" alt="" class="blog-1">

                <h3>Confianza y elegancia</h3>
                <p>¿Eres un entusiasta de los viajes que busca comodidad y estilo mientras exploras el mundo? 
                    exclusivo Kit de Vestimenta para Viajeros está diseñado pensando en ti. 
                    Este conjunto cuidadosamente seleccionado de prendas versátiles te permitirá enfrentar 
                    cualquier aventura con confianza y elegancia.

                </p>
            </div>

            <div class="blog-2">
                <img src="images/b2.jpg" alt="" class="blog-2">
                <h3>Confort y Durabilidad</h3>
                <p>Explora nuestra exclusiva colección de camisas y zapatos de cuero diseñados para aquellos
                    que buscan estilo, confort y sofisticación en cada ocasión. Desde reuniones formales hasta 
                    eventos casuales, estas prendas te permitirán destacar con elegancia y confianza.
                </p>
            </div>

            <div class="blog-3">
                <img src="images/b3.jpg" alt="" class="blog-3">
                <h3>Sofisticados</h3>
                <p>Sumérgete en la sofisticación y el estilo con nuestra última colección de camisas elegantes. 
                    Desde cortes modernos hasta detalles refinados, cada prenda está diseñada para realzar 
                    tu look con elegancia y comodidad. ¡Aprovecha esta oportunidad para renovar tu guardarropa
                    con nuestras exclusivas camisas!
                </p>
            </div>
        </div>

        </section>
        
        <script src="JS/scrip.js" type="text/javascript"></script>
    </body>
</html>
