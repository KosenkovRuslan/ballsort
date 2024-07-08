namespace $ {
	$mol_test({
		
		"tube completing"() {
			
			const game = new $games_ballsort_game
			const tube = game.tubes().find( tube => tube.balls().length > 0 )!
			
			$mol_assert_equal( tube.complete(), false )

			tube.balls().forEach( ball => ball.color( 0 ) )
			$mol_assert_equal( tube.complete(), true )
		},
		
	})
}
