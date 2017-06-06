<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>

		<link href="//www.google-analytics.com" rel="dns-prefetch">
        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/favicon.ico" rel="shortcut icon">
        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/touch.png" rel="apple-touch-icon-precomposed">

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php bloginfo('description'); ?>">

		<?php wp_head(); ?>

	</head>
	<body <?php body_class(); ?>>

		<!-- wrapper -->
		<div class="page-wrap">

			<!-- header -->
			<header class= "page-header">
                <div class="section-inner">

                    <div class="logo">
                        <!--[if lte IE 8]><img src="logo.png" /><![endif]-->
                        <!--[if gt IE 8]><img src="logo.svg" /><![endif]-->
                        <!--[if !IE]> --><img src="dist/images/logo3.svg"><!-- <![endif]-->
                        <h1>The Cub Room Rochestester</h1>
                        <ul class="fun-list">
                            <li>dining</li>
                            <li>camaraderie</li>
                            <li>libations</li>
                        </ul>
                    </div>
                    
                    <nav class="main-nav">
                        
                        <ul>
                            <li>
                                <a href="#contact">contact</a>
                            </li>
                            <li>
                                <a href="#menu">menu</a>
                            </li>
                             <li>
                                <a href="#about">about</a>
                            </li>
                           <li>
                                <a href="#reservations">reservations</a>
                            </li>
                            <li>
                                <a href="#gallery">gallery</a>
                            </li>
                            <!-- <li>
                                <a href="#press">press</a>
                            </li> -->

                        </ul>

                    </nav>

                    <nav class="floating-nav">
                        
                        <ul>
                            <li>
                                <a href="#contact">contact</a>
                            </li>
                            <li>
                                <a href="#menu">menu</a>
                            </li>
                            <li>
                                <a href="#about">about</a>
                            </li>
                            <li>
                                <a href="#reservations">reservations</a>
                            </li>
                            <li>
                                <a href="#gallery">gallery</a>
                            </li>
                            <!-- <li>
                                <a href="#press">press</a>
                            </li> -->
                        </ul>

                    </nav>

                    <div class="mobile-nav-toggle">
                        
                    <a class="mobile-nav-trigger" href="#main-nav"><i>Menu</i></a>

                    </div>
                    
                </div>

            </header>
			<!-- /header -->
