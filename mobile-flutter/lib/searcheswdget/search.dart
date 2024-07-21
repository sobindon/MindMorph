import 'package:easy_search_bar/easy_search_bar.dart';
import 'package:flutter/material.dart';
import 'package:velocity_x/velocity_x.dart';

class search extends StatefulWidget {
  const search({super.key});

  @override
  State<search> createState() => _searchState();
}

class _searchState extends State<search> {
  String searchValue = '';
  final List<String> _suggestions = [
    'Flutter',
    'Android',
    'nodejs',
    'java script'
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: EasySearchBar(
          title: const Text('search.....'),
          backgroundColor: Colors.transparent,
          onSearch: (value) => setState(() => searchValue = value),
          suggestions: _suggestions),
      body: Column(
        children: [
          100.heightBox,
          Container(
            color: Colors.black,
            child: 'ByFilter'.text.size(20).white.make(),
          )
        ],
      ).box.roundedSM.alignment(Alignment.center).make(),
    );
  }
}
