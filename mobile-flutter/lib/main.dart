import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:morph/auth/splashscreen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demoo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
            seedColor: const Color.fromARGB(255, 60, 56, 66)),
        useMaterial3: true,
      ),
      home: SplashScreen(),
    );
  }
}
