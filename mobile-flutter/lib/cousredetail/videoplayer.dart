import 'package:appinio_video_player/appinio_video_player.dart';
import 'package:flutter/material.dart';
import 'package:morph/commonwidget/ratingbar.dart';
import 'package:morph/const/color.dart';
import 'package:morph/const/fonts.dart';
import 'package:velocity_x/velocity_x.dart';

class User {
  final String sectionname;
  final String length;

  User({
    required this.sectionname,
    required this.length,
  });
}

class videoplayer extends StatefulWidget {
  const videoplayer({super.key});

  @override
  State<videoplayer> createState() => _videoplayerState();
}

// ignore: camel_case_types
class _videoplayerState extends State<videoplayer> {
  List<User> user = [
    User(sectionname: 'Introduction', length: '2:40'),
    User(sectionname: 'Introduction', length: '2:40'),
    User(sectionname: 'Introduction', length: '2:40'),
    User(sectionname: 'Introduction', length: '2:40'),
  ];
  final ExpansionTileController controller = ExpansionTileController();
  late CustomVideoPlayerController _customVideoPlayerController;
  bool isvisible = true;
  String toggle = 'Showless';
  String cmnt = 'showles';
  @override
  void initState() {
    super.initState();
    initializevideoplayer();
  }

  @override
  void dispose() {
    _customVideoPlayerController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        color: themecolor,
        child: SafeArea(
          child: Column(children: [
            const SizedBox(
              height: 30,
            ),
            CustomVideoPlayer(
                customVideoPlayerController: _customVideoPlayerController),
            5.heightBox,
            Container(
              decoration: BoxDecoration(boxShadow: [
                BoxShadow(
                  color:
                      const Color.fromARGB(255, 249, 249, 249).withOpacity(0.2),
                  blurRadius: 7,
                  offset: const Offset(0, 3),
                ),
              ], color: themecolor),
              height: MediaQuery.of(context).size.height * 0.15,
              child: Column(
                children: [
                  Align(
                    alignment: Alignment.topLeft,
                    child: Title(
                        color: Colors.white,
                        child: const Text(
                          'Flutter Fullcourse Review(New Course)!',
                          style: TextStyle(
                            fontSize: 20,
                            color: Colors.white,
                          ),
                        )),
                  ),
                  10.heightBox,
                  Row(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      'Rating'
                          .text
                          .size(16)
                          .fontFamily(semibold)
                          .color(subtexColor)
                          .make(),
                      const SizedBox(width: 80),
                      ratingbar(20, 0.8, 5),
                      const SizedBox(width: 60),
                      'Rs 1000'.text.color(Colors.amber).make(),
                    ],
                  ),
                  Row(
                    children: [
                      Align(
                        alignment: Alignment.centerLeft,
                        child: 'By:morpha Team'
                            .text
                            .size(16)
                            .fontFamily(regular)
                            .color(subtexColor)
                            .make(),
                      ),
                      const SizedBox(
                        width: 15,
                      ),
                      20.heightBox,
                      const Icon(
                        Icons.language,
                        color: subtexColor,
                      ),
                      'English'.text.size(14).color(subtexColor).make(),
                      20.widthBox,
                      Container(
                        alignment: Alignment.center,
                        height: 30,
                        width: 120,
                        decoration: BoxDecoration(
                            color: boxtilecolor,
                            borderRadius: BorderRadius.circular(20)),
                        child: 'participants:100+'
                            .text
                            .color(subtexColor)
                            .size(14)
                            .make(),
                      ),
                    ],
                  )
                ],
              ),
            ),
            10.heightBox,
            Expanded(
              child: SingleChildScrollView(
                physics: const BouncingScrollPhysics(),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    5.heightBox,
                    Container(
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(20),
                        color: boxtilecolor,
                      ),
                      height: MediaQuery.of(context).size.height * 0.35,
                      width: MediaQuery.of(context).size.width * 0.87,
                      child: Column(
                        children: [
                          5.heightBox,
                          Align(
                            alignment: Alignment.center,
                            child: Title(
                                color: const Color.fromARGB(255, 255, 255, 255),
                                child: const Text(
                                  'Curriculum',
                                  style: TextStyle(
                                      fontSize: 18,
                                      fontFamily: regular,
                                      color: Colors.amber),
                                )),
                          ),
                          20.heightBox,
                          "->Introduction"
                              .text
                              .size(16)
                              .color(FeatureColor)
                              .make(),
                          5.heightBox,
                          "->Dart introduction"
                              .text
                              .size(16)
                              .color(FeatureColor)
                              .make(),
                          5.heightBox,
                          "->flutter widgets"
                              .text
                              .size(16)
                              .color(FeatureColor)
                              .make(),
                          5.heightBox,
                          "->flutter first"
                              .text
                              .size(16)
                              .color(FeatureColor)
                              .make(),
                          5.heightBox,
                          "->Statemangemen"
                              .text
                              .size(16)
                              .color(FeatureColor)
                              .make(),
                        ],
                      ),
                    ),
                    20.heightBox,
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [
                        // Padding(padding: EdgeInsets.all(20)),
                        GestureDetector(
                          onTap: () {
                            showModalBottomSheet(
                                backgroundColor: boxtilecolor,
                                context: context,
                                builder: (BuildContext context) {
                                  return SizedBox(
                                    height: 600,
                                    child: Center(
                                      child: Container(
                                        child: Column(
                                          children: [
                                            80.heightBox,
                                            Container(
                                              decoration: BoxDecoration(
                                                  color: themecolor,
                                                  border: Border.all(
                                                      width: 1,
                                                      color: Colors.white),
                                                  borderRadius:
                                                      BorderRadius.circular(
                                                          30)),
                                              height: MediaQuery.of(context)
                                                      .size
                                                      .height *
                                                  0.3,
                                              width: MediaQuery.of(context)
                                                      .size
                                                      .width *
                                                  0.8,
                                              child: Column(
                                                children: [
                                                  40.heightBox,
                                                  Align(
                                                    alignment: Alignment.center,
                                                    child: Row(
                                                      children: [
                                                        55.widthBox,
                                                        'Course name:'
                                                            .text
                                                            .size(16)
                                                            .color(titlecolor)
                                                            .fontFamily(bold)
                                                            .make(),
                                                        const SizedBox(
                                                            width:
                                                                5), // Add some space between the two texts
                                                        'Flutter Course'
                                                            .text // Second text widget
                                                            .size(12)
                                                            .color(FeatureColor)
                                                            .fontFamily(bold)
                                                            .make(),
                                                      ],
                                                    ),
                                                  ),
                                                  10.heightBox,
                                                  Align(
                                                    alignment: Alignment.center,
                                                    child: Row(
                                                      mainAxisAlignment:
                                                          MainAxisAlignment
                                                              .spaceBetween,
                                                      children: [
                                                        55.widthBox,
                                                        'Price:'
                                                            .text
                                                            .size(16)
                                                            .color(titlecolor)
                                                            .fontFamily(bold)
                                                            .make(),
                                                        const SizedBox(
                                                            width:
                                                                5), // Add some space between the two texts
                                                        '800'
                                                            .text // Second text widget
                                                            .size(12)
                                                            .color(FeatureColor)
                                                            .fontFamily(bold)
                                                            .make(),
                                                      ],
                                                    ),
                                                  ),
                                                  10.heightBox,
                                                  Align(
                                                    alignment: Alignment.center,
                                                    child: Row(
                                                      children: [
                                                        55.widthBox,
                                                        'Date of purchase:'
                                                            .text
                                                            .size(16)
                                                            .color(titlecolor)
                                                            .fontFamily(bold)
                                                            .make(),
                                                        const SizedBox(
                                                            width:
                                                                5), // Add some space between the two texts
                                                        'May 4,2024'
                                                            .text // Second text widget
                                                            .size(12)
                                                            .color(FeatureColor)
                                                            .fontFamily(bold)
                                                            .make(),
                                                      ],
                                                    ),
                                                  ),
                                                  10.heightBox,
                                                ],
                                              ),
                                            ),
                                            30.heightBox,
                                            Row(
                                              mainAxisAlignment:
                                                  MainAxisAlignment.spaceEvenly,
                                              children: [
                                                ElevatedButton(
                                                    style: ElevatedButton
                                                        .styleFrom(
                                                            backgroundColor:
                                                                themecolor,
                                                            shape:
                                                                RoundedRectangleBorder(
                                                              borderRadius:
                                                                  BorderRadius
                                                                      .circular(
                                                                          20),
                                                            ),
                                                            padding: EdgeInsets
                                                                .symmetric(
                                                                    vertical:
                                                                        10,
                                                                    horizontal:
                                                                        50)),
                                                    onPressed: () {
                                                      Navigator.pop(context);
                                                    },
                                                    child: Text(
                                                      'OK',
                                                      style: TextStyle(
                                                          color: Colors.white),
                                                    )),
                                                ElevatedButton(
                                                    style: ElevatedButton
                                                        .styleFrom(
                                                            backgroundColor:
                                                                themecolor,
                                                            shape:
                                                                RoundedRectangleBorder(
                                                              borderRadius:
                                                                  BorderRadius
                                                                      .circular(
                                                                          20),
                                                            ),
                                                            padding: EdgeInsets
                                                                .symmetric(
                                                                    vertical:
                                                                        10,
                                                                    horizontal:
                                                                        30)),
                                                    onPressed: () {
                                                      Navigator.pop(context);
                                                    },
                                                    child: Text(
                                                      'Confirm',
                                                      style: TextStyle(
                                                          fontSize: 14,
                                                          color: Colors.white),
                                                    )),
                                              ],
                                            ),
                                          ],
                                        ),
                                      ),
                                    ),
                                  );
                                });
                          },
                          child: Container(
                            decoration: BoxDecoration(
                                color: themecolor,
                                border:
                                    Border.all(width: 1, color: Colors.white),
                                borderRadius: BorderRadius.circular(20)),
                            alignment: Alignment.centerLeft,
                            // ignore: sort_child_properties_last
                            child: Align(
                              alignment: Alignment.center,
                              child: 'Buy'
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
                          onTap: () {},
                          child: Container(
                            decoration: BoxDecoration(
                                color: themecolor,
                                border:
                                    Border.all(width: 1, color: Colors.white),
                                borderRadius: BorderRadius.circular(20)),
                            alignment: Alignment.centerLeft,
                            // ignore: sort_child_properties_last
                            child: Align(
                              alignment: Alignment.center,
                              child: 'Add to Cart'
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
                    10.heightBox,
                    const Divider(
                      thickness: 0.8,
                      color: Colors.white,
                      endIndent: 40,
                      indent: 40,
                    ),
                    20.heightBox,
                    Align(
                      alignment: Alignment.topLeft,
                      child: TextButton(
                        onPressed: () {
                          setState(() {
                            isvisible = !isvisible;
                            cmnt = isvisible ? 'showless' : 'Comments';
                          });
                        },
                        style: ButtonStyle(
                          side: MaterialStateProperty.resolveWith<BorderSide>(
                            (Set<MaterialState> states) {
                              return BorderSide(
                                color: const Color.fromARGB(
                                    255, 255, 255, 255), // Border color
                                width: 1, // Border width
                              );
                            },
                          ),
                        ),
                        child: Text(cmnt,
                            textAlign: TextAlign.start,
                            style: TextStyle(
                              fontFamily: regular,
                              fontSize: 14,
                              color: Colors.white,
                            )),
                      ),
                    ),
                    Visibility(
                      visible: isvisible,
                      child: Container(
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(20),
                          color: boxtilecolor,
                        ),
                        height: MediaQuery.of(context).size.height * 0.9,
                        width: MediaQuery.of(context).size.height * 0.95,
                        child: Column(
                          children: [
                            20.heightBox,
                            Container(
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(10),
                                color: boxtilecolor,
                              ),
                              padding: const EdgeInsets.all(10),
                              height: MediaQuery.of(context).size.height * 0.15,
                              width: MediaQuery.of(context).size.height * 0.60,
                              child: Column(
                                children: [
                                  Align(
                                    alignment: Alignment.topLeft,
                                    child: "sobin rai "
                                        .text
                                        .color(Colors.amber)
                                        .maxFontSize(20)
                                        .make(),
                                  ),
                                  ratingbar(10, 8, 4),
                                  5.heightBox,
                                  Align(
                                    alignment: Alignment.topLeft,
                                    child:
                                        "i recommend this course to every one who want really learn, i loved it.It describe all basic to pro level. "
                                            .text
                                            .color(FeatureColor)
                                            .maxFontSize(20)
                                            .make(),
                                  ),
                                ],
                              ),
                            ),
                            Divider(
                              thickness: 1,
                              color: FeatureColor,
                            ),
                            Container(
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(10),
                                color: boxtilecolor,
                              ),
                              padding: const EdgeInsets.all(10),
                              height: MediaQuery.of(context).size.height * 0.15,
                              width: MediaQuery.of(context).size.height * 0.60,
                              child: Column(
                                children: [
                                  Align(
                                    alignment: Alignment.topLeft,
                                    child: "Narayan Gautam "
                                        .text
                                        .color(Colors.amber)
                                        .maxFontSize(20)
                                        .make(),
                                  ),
                                  ratingbar(10, 8, 4),
                                  5.heightBox,
                                  Align(
                                    alignment: Alignment.topLeft,
                                    child:
                                        "i recommend this course to every one who want really learn, i loved it.It describe all basic to pro level. "
                                            .text
                                            .color(FeatureColor)
                                            .maxFontSize(20)
                                            .make(),
                                  ),
                                ],
                              ),
                            ),
                            Divider(
                              thickness: 1,
                              color: FeatureColor,
                            ),
                            Container(
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(10),
                                color: boxtilecolor,
                              ),
                              padding: const EdgeInsets.all(10),
                              height: MediaQuery.of(context).size.height * 0.15,
                              width: MediaQuery.of(context).size.height * 0.60,
                              child: Column(
                                children: [
                                  Align(
                                    alignment: Alignment.topLeft,
                                    child: "Suraj Kumar Yadav "
                                        .text
                                        .color(Colors.amber)
                                        .maxFontSize(20)
                                        .make(),
                                  ),
                                  ratingbar(10, 8, 4),
                                  5.heightBox,
                                  Align(
                                    alignment: Alignment.topLeft,
                                    child:
                                        "i recommend this course to every one who want really learn, i loved it.It describe all basic to pro level. "
                                            .text
                                            .color(FeatureColor)
                                            .maxFontSize(20)
                                            .make(),
                                  ),
                                ],
                              ),
                            ),
                            Divider(
                              thickness: 1,
                              color: FeatureColor,
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            )
          ]),
        ),
      ),
    );
  }

  void initializevideoplayer() {
    CachedVideoPlayerController _CachedVideoPlayerController;
    _CachedVideoPlayerController = CachedVideoPlayerController.network(
        'https://www.w3schools.com/html/mov_bbb.mp4')
      ..initialize().then((value) {
        setState(() {});
      });
    _customVideoPlayerController = CustomVideoPlayerController(
        context: context, videoPlayerController: _CachedVideoPlayerController);
  }
}
