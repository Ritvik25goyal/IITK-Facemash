for i in {220001..221238}
do
	curl -kLSs https://pingala.iitk.ac.in/ILS/employee_images/$i.jpg -o $i.jpg
done
