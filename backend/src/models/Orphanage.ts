import {
	Column,
	Entity,
	JoinColumn,
	OneToMany,
	PrimaryGeneratedColumn,
} from "typeorm";

import Image from "./Image";

@Entity("orphanages")
class Orphanage {
	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	name: string;

	@Column()
	latitude: number;

	@Column()
	longitude: number;

	@Column()
	about: string;

	@Column()
	instructions: string;

	@Column()
	opening_hours: number;

	@Column()
	open_on_weekends: boolean;

	@OneToMany(
		function () {
			return Image;
		},
		function (image) {
			return image.orphanage;
		},
		{
			cascade: ["insert", "update"],
		}
	)
	@JoinColumn({ name: "orphanage_id" })
	images: Image[];
}

export default Orphanage;
