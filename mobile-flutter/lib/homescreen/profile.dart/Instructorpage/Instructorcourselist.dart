import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:morph/const/color.dart';
import 'package:morph/cousredetail/instructorcourse/coursevideo.dart';
import 'package:morph/homescreen/profile.dart/Instructorpage/addcoursepage.dart';

class Instructor {
  final String coursename;
  final String Urlthumbcourse;
  final String price;
  Instructor({
    required this.coursename,
    required this.price,
    required this.Urlthumbcourse,
  });
}

class listInstructorcourse extends StatelessWidget {
  listInstructorcourse({super.key});
  List<Instructor> instructor = [
    Instructor(
        coursename: "Flutter Basic Course",
        price: "Rs.500",
        Urlthumbcourse:
            'https://www.excelptp.com/wp-content/uploads/2023/03/Flutter-Development-Course.jpg'),
    Instructor(
        coursename: "Javacourse",
        price: "RS.2600",
        Urlthumbcourse:
            'https://www.excelptp.com/wp-content/uploads/2023/03/Flutter-Development-Course.jpg'),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: const Text('My Course',
            style: TextStyle(color: FeatureColor, fontSize: 20)),
        iconTheme: const IconThemeData(color: titlecolor),
        backgroundColor: const Color.fromARGB(255, 8, 27, 42),
        actions: [
          IconButton(
              onPressed: () {
                Get.to(() => AddCoursePage());
              },
              icon: const Icon(Icons.add))
        ],
      ),
      body: Container(
          color: themecolor,
          child: ListView.builder(
              itemCount: instructor.length,
              itemBuilder: ((BuildContext context, Index) {
                final instructors = instructor[Index];
                return Container(
                    height: 100,
                    child: Card(
                        elevation: 50,
                        color: boxtilecolor,
                        semanticContainer: true,
                        child: ListTile(
                          leading: Container(
                            decoration: BoxDecoration(),
                            width: 100,
                            height: 200,
                            child: Image.network(
                              instructors.Urlthumbcourse,
                              fit: BoxFit.contain,
                            ),
                          ),
                          title: Text(
                            instructors.coursename,
                            style: const TextStyle(
                                color: titlecolor, fontSize: 18),
                          ),
                          subtitle: Text(
                            instructors.price,
                            style: const TextStyle(
                                color: Colors.amber, fontSize: 14),
                          ),
                          trailing: IconButton(
                              onPressed: () {
                                Get.to(() => Instructpage());
                              },
                              icon: const Icon(Icons.arrow_forward)),
                        )));
              }))),
    );
  }
}
