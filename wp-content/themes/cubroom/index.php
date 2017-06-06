<?php get_header(); ?>

	<main role="main">

		<section class="contact" id="contact">

            <div class="section-inner">
                
                <div class="section-inner-left">
                    <div>
                        <h1>the cub room</h1>
                        <ul>
                            <li>
                                <h3>visit</h3>
                                <address>
                                    739 South Clinton Avenue <br/>
                                    Rochester, NY 14620
                                </address>
                            </li>
                            <li class="hours">
                                <h3>hours</h3>
                                <p>Monday - Wednesday: 11:30am – 11:00pm </p>
                                <p>Thursday - Friday: 11:30am – 12:00am </p>
                                <p>Saturday: 5:00pm - 12:00am</p>
                                <p>Sunday: Open for Brunch, 11:30am - 5pm</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="section-inner-right">
                    <div class="contact">
                        <h3>contact</h3>
                        <p>Call: <a href="tel:585-363-5694">585-363-5694</a></p>
                        <p>Email: <a href="mailto:info@thecubroomroc.com">info@thecubroomroc.com</a></p>

                        <ul class="social">
                            <li>
                                <a class="icon-facebook2" target="_blank" href="https://www.facebook.com/pages/The-Cub-Room/1404538309798989"></a>
                               <!--  <a class="icon-twitter" href="twitter.com"></a> -->
                            </li>
                            <li>
                                <a class="icon-instagram" target="_blank" href="https://instagram.com/thecubroomroc"></a>
                               <!--  <a class="icon-twitter" href="twitter.com"></a> -->
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
            
        </section>    <!-- contact -->
        <section class="menus" id="menu">
                
            <div class="section-inner">

                <h2>our menus</h2>
                
                <ul>
                    <li>
                        <a href="dist/images/menus/menu-brunch.pdf" target="_blank">brunch</a>
                    </li>
                    <li>
                        <a href="dist/images/menus/Lunch_menu.pdf" target="_blank">lunch</a>
                    </li>
                    <li>
                        <a href="dist/images/menus/Dinner_Menu.pdf" target="_blank">dinner</a>
                    </li>
                    <li>
                        <a href="dist/images/menus/Dessert_menu.pdf" target="_blank">dessert</a>
                    </li>
                    <li>
                        <a href="dist/images/menus/liquor_menu.pdf" target="_blank">cocktails</a>
                    </li>
                    <li>
                        <a href="dist/images/menus/menu-wine.pdf" target="_blank">wine</a>
                    </li>
                    <li>
                        <a href="dist/images/menus/Bar_menu.pdf" target="_blank">bar menu</a>
                    </li>

                </ul>

            </div>

        </section>
		<!-- menus -->
		<section class="about" id="about">

            <div class="section-inner">
                
                <!-- <img alt="greg and jodi" src="../images/greg-jodi.jpg"> -->

                <div class="copy">
                    <h2>fresh, seasonal american fare</h2>
                    <p>The Cub Room is an American Restaurant located at the Edge of the Wedge in Downtown Rochester, NY. The husband and wife team, Greg and Jodi Johnson, bring their rich experience from New York City and offer up an homage to an era in time when service and dining meant only the best.</p>
                    <p>The Cub Room offers American fare that is fresh and seasonal set in a casual, yet stylish environment.</p>
                    <p>The Cub Room is a place of camaraderie to spend the evening; eat, drink, and mingle. Lose yourself in an atmosphere where we encourage you to indulge, imbibe, and smile</p>
                </div>

            </div>

                
        </section>
         <!-- about -->
        <section class="reservations" id="reservations">

            <div class="section-inner">
                
                <div class="section-inner-left">
                    <h2>Reservations</h2>
                    <p>Make a reservation here, or call <a href="tel:585-363-5694">585-363-5694</a> </p>

                </div>
                <div class="section-inner-right">
                     <div class="iframe‐wrapper">
                        <iframe src="https://us2.eveve.com/tms/DateCovers.php?Est=CubRoom"> frameborder="0" style="height:520px;width:100%;">
                        </iframe>
                    </div>

                </div>

            </div>

        </section>

        <section id="gallery">
             
             <div class="slideshow">
                <div class="slide"><img src="dist/images/slides/smaller/068.jpg"></div>
                <div class="slide"><img src="dist/images/slides/smaller/013.jpg"></div>
                <div class="slide"><img src="dist/images/slides/smaller/025.jpg"></div>
                <div class="slide"><img src="dist/images/slides/smaller/Flamedrink.jpg"></div>
                <div class="slide"><img src="dist/images/slides/smaller/043.jpg"></div>
                <div class="slide"><img src="dist/images/slides/smaller/045.jpg"></div>
                <div class="slide"><img src="dist/images/slides/smaller/038.jpg"></div>
                <div class="slide"><img src="dist/images/slides/smaller/060.jpg"></div>
                <div class="slide"><img src="dist/images/slides/smaller/0032.jpg"></div>
                <div class="slide"><img src="dist/images/slides/smaller/009.jpg"></div>
             </div>

        </section>

		<section class="posts">

			<h1><?php _e( 'Latest Posts', 'html5blank' ); ?></h1>

			<?php get_template_part('loop'); ?>

			<?php get_template_part('pagination'); ?>

		</section>
		<!-- /section -->
	</main>

<?php get_sidebar(); ?>

<?php get_footer(); ?>
