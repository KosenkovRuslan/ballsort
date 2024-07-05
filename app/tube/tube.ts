namespace $ {
    export class $games_ballsort_tube extends $mol_object {

        balls(next?: $games_ballsort_ball[]) {
            return next ?? []
        }

		size() {
			return 0
		}

		@ $mol_mem
		complete() {
			const [ ball, ...balls ] = this.balls()
			return this.balls().length === this.size() && balls.every( obj => obj.color() === ball.color() )
		}

		@ $mol_action
		take() {
			const next = this.balls().slice()
		}

		@ $mol_action
		put(obj: $games_ballsort_ball) {
			this.balls( [ obj, ...this.balls() ] )
		}

    }
}
