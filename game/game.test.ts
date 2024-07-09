namespace $ {
	$mol_test({
		
		'tube completing'() {
			
			const game = new $games_ballsort_game
			const tube = game.tubes().find( tube => tube.balls().length > 0 )!
			
			$mol_assert_equal( tube.complete(), false )

			tube.balls().forEach( ball => ball.color( 0 ) )
			$mol_assert_equal( tube.complete(), true )
		},

		'completed tube non activation'() {

			const game = new $games_ballsort_game
			const tube = game.tubes().find( tube => tube.balls().length > 0 )!

			$mol_assert_equal(game.tube_active(), null)

			tube.balls().forEach( ball => ball.color( 0 ) )

			game.tube_click( tube )
			$mol_assert_equal(game.tube_active(), null)

		},

		'empty tube non activation'() {

			const game = new $games_ballsort_game
			const tube = game.tubes().find( tube => tube.balls().length === 0 )!

			$mol_assert_equal(game.tube_active(), null)

			game.tube_click( tube )
			$mol_assert_equal(game.tube_active(), null)

		},

		'tube activation'() {

			const game = new $games_ballsort_game
			const filled_tube = game.tubes().find( tube => tube.balls().length > 0 )!
			const empty_tube = game.tubes().find( tube => tube.balls().length === 0 )!

			$mol_assert_equal(game.tube_active(), null)

			game.tube_click( filled_tube )
			$mol_assert_equal(filled_tube, game.tube_active())

			game.tube_click( empty_tube )
			$mol_assert_equal(game.tube_active(), null)

			game.tube_click( empty_tube)
			$mol_assert_equal(empty_tube, game.tube_active())

		},

		'ball_moving'() {

			const game = new $games_ballsort_game
			const filled_tube = game.tubes().find( tube => tube.balls().length > 0 )!
			const empty_tube = game.tubes().find( tube => tube.balls().length === 0 )!
			const ball_moving = filled_tube.balls().at(-1)!

			game.tube_click( filled_tube )
			game.tube_click( empty_tube )

			$mol_assert_equal(filled_tube.balls().length, game.tube_size() - 1)
			$mol_assert_equal(filled_tube.balls().includes( ball_moving ), false)

			$mol_assert_equal(empty_tube.balls().length, 1)
			$mol_assert_equal(empty_tube.balls().includes( ball_moving ), true)

		},

		'move increment'() {

			const game = new $games_ballsort_game
			const filled_tube = game.tubes().find( tube => tube.balls().length > 0 )!
			const empty_tube = game.tubes().find( tube => tube.balls().length === 0 )!
			
			game.tube_click( filled_tube )
			game.tube_click( empty_tube )
			
			$mol_assert_equal(game.moves(), 1)

		},

		'game finish'() {

			const game = new $games_ballsort_game

			$mol_assert_equal(game.finished(), false)

			// game.tubes().forEach( tube => tube.balls().forEach( ball => ball.color( 0 ) ) )
			game.balls().forEach( ball => ball.color( 0 ) )

			$mol_assert_equal(game.finished(), true)
		}
		
	})
}
