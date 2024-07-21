import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:morph/commonwidget/coursettitle/coursetitle.dart';
import 'package:morph/const/color.dart';
import 'package:morph/cousredetail/videoplayer.dart';
import 'package:morph/elementlist/imagelist.dart';
import 'package:morph/elementlist/pricelist.dart';
import 'package:morph/elementlist/ratingvaluelist.dart';
import 'package:morph/elementlist/stringlist.dart';
import 'package:morph/homescreen/cartscreen/cartscreen.dart';
import 'package:morph/homescreen/profile.dart/account.dart';
import 'package:morph/homescreen/searchpage.dart';
import 'package:velocity_x/velocity_x.dart';

class Homepage extends StatefulWidget {
  const Homepage({super.key});

  @override
  State<Homepage> createState() => _HomepageState();
}

class _HomepageState extends State<Homepage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        padding: const EdgeInsets.all(12),
        color: themecolor,
        width: context.screenWidth,
        height: context.screenHeight,
        child: SafeArea(
          child: Column(children: [
            Container(
              decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(10),
                  color: backgrounghilghtcolor,
                  border: Border.all(
                    color: themecolor,
                  )),
              height: 50,
              child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    IconButton(
                        color: titlecolor,
                        onPressed: () {
                          Get.to(() => const Acount());
                        },
                        icon: const Icon(Icons.person_rounded)),
                    180.widthBox,
                    IconButton(
                      color: titlecolor,
                      onPressed: () {
                        Get.to(() => Cartpage());
                      },
                      icon: const Icon(Icons.shopping_cart),
                    ),
                    IconButton(
                      color: titlecolor,
                      onPressed: () {
                        Get.to(() => Search());
                      },
                      icon: const Icon(Icons.search),
                    ),
                  ]),
            ),
            40.heightBox,
            Expanded(
                child: SingleChildScrollView(
              physics: const BouncingScrollPhysics(),
              child: Column(
                children: [
                  VxSwiper.builder(
                      aspectRatio: 16 / 9,
                      autoPlay: true,
                      enlargeCenterPage: true,
                      height: 230,
                      itemCount: announcelist.length,
                      viewportFraction: 0.9999,
                      itemBuilder: (BuildContext context, int index) {
                        return Image.asset(
                          announcelist[index],
                          fit: BoxFit.fill,
                        )
                            .box
                            .rounded
                            .clip(Clip.antiAlias)
                            .margin(const EdgeInsets.symmetric(horizontal: 10))
                            .make();
                      }),
                  10.heightBox,
                  const Divider(
                    thickness: 0.8,
                    color: Color.fromARGB(255, 148, 145, 145),
                  ),
                  20.heightBox,
                  Align(
                    alignment: Alignment.topLeft,
                    child: "Top courses"
                        .text
                        .color(FeatureColor)
                        .bold
                        .size(25)
                        .make(),
                  ),
                  5.heightBox,
                  Card(
                    color: backgrounghilghtcolor,
                    shadowColor: const Color.fromARGB(255, 17, 17, 16),
                    clipBehavior: Clip.hardEdge,
                    child: SizedBox(
                      height: 170,
                      width: 500,
                      child: SingleChildScrollView(
                        scrollDirection: Axis.horizontal,
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: List.generate(
                            3,
                            (index) => GestureDetector(
                              onTap: () {
                                Get.to(() => videoplayer());
                              },
                              child: Container(
                                height: 250,
                                width: 178,
                                padding: const EdgeInsets.all(7),
                                child: Column(children: [
                                  featurelistRow(
                                    image: courselist[index],
                                    name: coursedetail[index],
                                    price: pricelist[index],
                                    countstar: ratingcount[index],
                                  ),
                                ]).box.make(),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                  20.heightBox,
                  Align(
                    alignment: Alignment.topLeft,
                    child: "Features course "
                        .text
                        .color(FeatureColor)
                        .bold
                        .size(25)
                        .make(),
                  ),
                  5.heightBox,
                  Card(
                    color: backgrounghilghtcolor,
                    shadowColor: const Color.fromARGB(255, 17, 17, 16),
                    clipBehavior: Clip.hardEdge,
                    child: SizedBox(
                      height: 170,
                      width: 500,
                      child: SingleChildScrollView(
                        scrollDirection: Axis.horizontal,
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: List.generate(
                            3,
                            (index) => GestureDetector(
                              onTap: () {
                                Get.to(() => videoplayer());
                              },
                              child: Container(
                                height: 250,
                                width: 178,
                                padding: const EdgeInsets.all(7),
                                child: Column(children: [
                                  featurelistRow(
                                    image: courselist[index],
                                    name: coursedetail[index],
                                    price: pricelist[index],
                                    countstar: ratingcount[index],
                                  ),
                                ]).box.make(),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                  20.heightBox,
                  Align(
                    alignment: Alignment.topLeft,
                    child: "Trending Course"
                        .text
                        .color(FeatureColor)
                        .bold
                        .size(25)
                        .make(),
                  ),
                  5.heightBox,
                  Card(
                    color: backgrounghilghtcolor,
                    shadowColor: const Color.fromARGB(255, 17, 17, 16),
                    clipBehavior: Clip.hardEdge,
                    child: SizedBox(
                      height: 170,
                      width: 500,
                      child: SingleChildScrollView(
                        scrollDirection: Axis.horizontal,
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: List.generate(
                            3,
                            (index) => GestureDetector(
                              onTap: () {
                                Get.to(() => videoplayer());
                              },
                              child: Container(
                                height: 250,
                                width: 178,
                                padding: const EdgeInsets.all(7),
                                child: Column(children: [
                                  featurelistRow(
                                    image: courselist[index],
                                    name: coursedetail[index],
                                    price: pricelist[index],
                                    countstar: ratingcount[index],
                                  ),
                                ]).box.make(),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            )),
          ]),
        ),
      ),
    );
  }
}
