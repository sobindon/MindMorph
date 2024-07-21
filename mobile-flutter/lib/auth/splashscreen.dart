import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:lottie/lottie.dart';
// import 'package:morph/auth/log.dart';
import 'package:morph/auth/login.dart';
import 'package:morph/const/color.dart';
import 'package:morph/const/fonts.dart';
import 'package:velocity_x/velocity_x.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  change() {
    Future.delayed(const Duration(seconds: 4), () {
      Get.to(() => const Login()); //LoginScreen());
    });
  }

  @override
  void initState() {
    change();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: themecolor,
      body: Center(
        child: Column(
          children: [
            150.heightBox,
            Align(
                alignment: Alignment.center,
                child: SizedBox(
                  height: 300,
                  width: 300,
                  child: Lottie.asset('assets/images/splashscreen.json'),
                )),
            "MINDMORPH"
                .text
                .color(Colors.white)
                .fontFamily(bold)
                .size(30)
                .make(),
            "Easy Way To Learn"
                .text
                .color(titlecolor)
                .fontFamily(bold)
                .size(4)
                .make(),
            200.heightBox,
            "Developed"
                .text
                .fontFamily(regular)
                .size(12)
                .color(titlecolor)
                .make(),
            "By".text.fontFamily(regular).size(12).color(titlecolor).make(),
            "NEC MORPH TEAM"
                .text
                .fontFamily(regular)
                .size(0.1)
                .color(titlecolor)
                .make(),
          ],
        ),
      ),
    );
  }
}
