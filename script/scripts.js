window.onload = rawl;

 
 

function rawl() {


	$( "#chocolate" ).click(function() {
		
		$( "#padder img" ).removeAttr( "src" );
		$( "#padder img" ).attr( "src", "images/chocolate.png" );
		$( "#change" ).html( "Chocolate" );
		$( "#texter" ).html( "Our most popular flavour is Chocolate. <Br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum lobortis bibendum. Suspendisse sodales, leo sit amet interdum aliquam, mauris magna commodo est, blandit pellentesque eros eros id eros. Proin non risus metus." );

	});

	$( "#strawbery" ).click(function() {
			
			$( "#padder img" ).removeAttr( "src" );
			$( "#padder img" ).attr( "src", "images/strawberry.png" );
			$( "#change" ).html( "Strawberry" );
			$( "#texter" ).html("Berry Strawberry<Br>ger tellus orci, pellentesque quis sagittis sed, volutpat sit amet turpis. Vestibulum ultrices, enim in varius pharetra, lectus sem porttitor sem, eget sollicitudin est justo in diam.<Br> Vestibulum et sapien orci. Etiam dui quam, eleifend et tristique quis, aliquet at dui. Sed tempor, urna");


		});

	$( "#vanila" ).click(function() {
			
			$( "#padder img" ).removeAttr( "src" );
			$( "#padder img" ).attr( "src", "images/vanila.png" );
			$( "#change" ).html( "Vanilla" );
			$( "#texter" ).html("Delicate Vanilla<br>Vestibulum ut posuere odio. Quisque id mauris eu purus accumsan lobortis imperdiet ac massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta venenatis lacus, nec ornare tortor posuere eu. Sed sit amet purus metus. Vestibulum laoreet eros fermentum hendrerit tempor. Quisque ipsum arcu, ultrices sit amet nisl at, scelerisque tristique elit.");


		});

	$( "#cherrybomb" ).click(function() {
			
			$( "#padder img" ).removeAttr( "src" );
			$( "#padder img" ).attr( "src", "images/cherrybomb.png" );
			$( "#change" ).html( "Cherry Bomb" );
			$( "#texter" ).html("Red Cherry<br>Cras commodo ligula ac vestibulum ornare. Fusce congue rhoncus urna at venenatis. Aliquam id ante gravida justo ultricies pulvinar. Etiam vulputate pretium tortor, vel tempus ante cursus in. Suspendisse ultricies euismod metus ut imperdiet. Nam vulputate");

		});

	$( "#cottoncandy" ).click(function() {
			
			$( "#padder img" ).removeAttr( "src" );
			$( "#padder img" ).attr( "src", "images/cottoncandy.png" );
			$( "#change" ).html( "Cotton Candy" );
			$( "#texter" ).html("nteger porttitor euismod euismod. Vestibulum dapibus risus vel purus ultrices, quis iaculis mauris pharetra. Vestibulum et sem eu nulla tempor vulputate. Morbi eget congue odio. Aliquam erat volutpat. <br>s mauris pharetra. Vestibulum et sem eu nulla tempor vulputate. Morbi eget congue odio. Aliquam erat volutpat. Vivamus imperdiet lectus a dolor commodo, non congue risus mollis. Nam elementum eleifend dolor, ac ornare mauris viverra id. Aliquam ");
	

		});

	$( "#peach" ).click(function() {
			
			$( "#padder img" ).removeAttr( "src" );
			$( "#padder img" ).attr( "src", "images/rocky.png" );
			$( "#change" ).html( "Peach" );
			$( "#texter" ).html("g elit. Nunc porta venenatis lacus, nec ornare tortor posuere eu. Sed sit amet purus metus. Vestibulum laoreet eros fermentum hendrerit tempor. Quisque ipsum arcu, ultrices sit amet nisl at, scelerisque tristique elit.ed pulvinar accumsan felis, non iaculis elit mollis faucibus. Morbi auctor feugiat gravida. Quisque pellentesque tellus felis, eget hendrerit eros condimentum ");


		});



};