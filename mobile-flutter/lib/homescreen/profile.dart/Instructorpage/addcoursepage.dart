import 'package:file_picker/file_picker.dart';
import 'package:flutter/material.dart';
import 'package:flutter_keyboard_visibility/flutter_keyboard_visibility.dart';
import 'package:get/get.dart';
import 'package:morph/const/color.dart'; // Assuming you have defined these
import 'package:morph/const/fonts.dart'; // Assuming you have defined these
import 'package:morph/homescreen/profile.dart/Instructorpage/Instructorcourselist.dart';
import 'package:velocity_x/velocity_x.dart';

class AddCoursePage extends StatefulWidget {
  const AddCoursePage({Key? key}) : super(key: key);

  @override
  _AddCoursePageState createState() => _AddCoursePageState();
}

class _AddCoursePageState extends State<AddCoursePage> {
  TextEditingController _courseNameController = TextEditingController();
  TextEditingController _priceController = TextEditingController();
  TextEditingController _assignmentController = TextEditingController();
  TextEditingController _descriptionController = TextEditingController();
  PlatformFile? _pickedFile;

  Future<void> _selectFile() async {
    final result = await FilePicker.platform.pickFiles();
    if (result != null) {
      setState(() {
        _pickedFile = result.files.first;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
            backgroundColor: boxtilecolor,
            iconTheme: const IconThemeData(color: titlecolor),
            centerTitle: true,
            title: const Text(
              "Add Course",
              style: TextStyle(color: titlecolor, fontSize: 20),
            )),
        body: KeyboardVisibilityBuilder(
          builder: (context, iskeyboadvisible) {
            return SingleChildScrollView(
              child: Container(
                width: context.screenWidth,
                height: context.screenHeight,
                color: themecolor,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    20.heightBox,
                    Container(
                      padding: const EdgeInsets.all(10),
                      width: MediaQuery.of(context).size.width * 0.90,
                      height: MediaQuery.of(context).size.height * 0.15,
                      decoration: BoxDecoration(
                        color: boxtilecolor,
                        borderRadius: BorderRadius.circular(20),
                      ),
                      child: Column(
                        children: [
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceAround,
                            children: [
                              TextButton(
                                  onPressed: _selectFile,
                                  child: const Text(
                                    'Select Course File:',
                                    style: TextStyle(fontSize: 16),
                                  )),
                              Container(
                                height: 25,
                                width: 100,
                                decoration: BoxDecoration(
                                    color:
                                        const Color.fromARGB(255, 80, 97, 134),
                                    borderRadius: BorderRadius.circular(5)),
                                child: _pickedFile != null
                                    ? Text(_pickedFile!.name)
                                    : const Text("Please select a file"),
                              ),
                            ],
                          ),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.start,
                            children: [
                              TextButton(
                                  onPressed: _selectFile,
                                  child: const Text(
                                    'Select  Thumbnail:',
                                    style: TextStyle(fontSize: 16),
                                  )),
                              30.widthBox,
                              Container(
                                height: 25,
                                width: 100,
                                decoration: BoxDecoration(
                                    color:
                                        const Color.fromARGB(255, 80, 97, 134),
                                    borderRadius: BorderRadius.circular(5)),
                                child: _pickedFile != null
                                    ? Text(_pickedFile!.name)
                                    : const Text("Please select Img"),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),
                    20.heightBox,
                    Container(
                      padding: const EdgeInsets.all(10),
                      width: MediaQuery.of(context).size.width * 0.90,
                      height: MediaQuery.of(context).size.height * 0.6,
                      decoration: BoxDecoration(
                        color: boxtilecolor,
                        borderRadius: BorderRadius.circular(20),
                      ),
                      child: Column(
                        children: [
                          20.heightBox,
                          const Text(
                            "Course Details",
                            style: TextStyle(
                              color: titlecolor,
                              fontFamily: bold,
                              fontSize: 16,
                            ),
                          ),
                          const Divider(
                            thickness: 1,
                            color: titlecolor,
                            endIndent: 60,
                            indent: 60,
                          ),
                          const SizedBox(height: 20),
                          TextFormField(
                            controller: _courseNameController,
                            decoration: const InputDecoration(
                              labelText: 'Title:',
                              labelStyle: TextStyle(
                                  color: FeatureColor, fontFamily: semibold),
                              border: UnderlineInputBorder(),
                            ),
                            style: const TextStyle(
                                color: Color.fromARGB(255, 137, 165, 204)),
                          ),
                          TextFormField(
                            controller: _priceController,
                            decoration: const InputDecoration(
                              labelText: 'Price:',
                              labelStyle: TextStyle(
                                  color: FeatureColor, fontFamily: semibold),
                              border: UnderlineInputBorder(),
                            ),
                            style: const TextStyle(
                                color: Color.fromARGB(255, 137, 165, 204)),
                          ),
                          TextFormField(
                            controller: _assignmentController,
                            decoration: const InputDecoration(
                              labelText: 'Languages:',
                              labelStyle: TextStyle(
                                  color: FeatureColor, fontFamily: semibold),
                              border: UnderlineInputBorder(),
                            ),
                            style: const TextStyle(
                                color: Color.fromARGB(255, 137, 165, 204)),
                          ),
                          10.heightBox,
                          "Description"
                              .text
                              .color(FeatureColor)
                              .fontFamily(bold)
                              .make(),
                          TextField(
                            style: const TextStyle(
                                color: Color.fromARGB(255, 137, 165, 204)),
                            controller: _descriptionController,
                            decoration: const InputDecoration(
                              border: OutlineInputBorder(),
                            ),
                            maxLines: 4,
                            keyboardType: TextInputType.multiline,
                          )
                        ],
                      ),
                    ),
                    10.heightBox,
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [
                        GestureDetector(
                          onTap: () {},
                          child: Container(
                            decoration: BoxDecoration(
                                color: themecolor,
                                border: Border.all(
                                    width: 1,
                                    color: Color.fromARGB(255, 63, 73, 102)),
                                borderRadius: BorderRadius.circular(20)),
                            alignment: Alignment.centerLeft,
                            // ignore: sort_child_properties_last
                            child: Align(
                              alignment: Alignment.center,
                              child: 'Confirm'
                                  .text
                                  .fontFamily(regular)
                                  .color(Colors.white)
                                  .make(),
                            ),
                            height: 60,
                            width: 100,
                          ),
                        ),
                        GestureDetector(
                          onTap: () {
                            Get.to(() => listInstructorcourse());
                          },
                          child: Container(
                            decoration: BoxDecoration(
                                color: themecolor,
                                border: Border.all(
                                    width: 1,
                                    color:
                                        const Color.fromARGB(255, 63, 73, 102)),
                                borderRadius: BorderRadius.circular(20)),
                            alignment: Alignment.centerLeft,
                            // ignore: sort_child_properties_last
                            child: Align(
                              alignment: Alignment.center,
                              child: 'cancel'
                                  .text
                                  .fontFamily(regular)
                                  .color(Colors.white)
                                  .make(),
                            ),
                            height: 60,
                            width: 100,
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            );
          },
        ));
  }
}
