import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from "typeorm";

import Orphanage from "./Orphanage";

@Entity("images")
class Image {
	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	path: string;

	@ManyToOne(
		function () {
			return Orphanage;
		},
		function (orphanage) {
			return orphanage.images;
		}
	)
	@JoinColumn({ name: "orphanage_id" })
	orphanage: Orphanage;
}

export default Image;
